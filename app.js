import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';


import Fight from "./Fight/Fight.js";
import Player from "./Character/Player.js";
import MonsterFactory from "./Character/Monster.js";
import Item from "./Item/Item.js";

let player;

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function startAdventure() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Maze entered'
  );

  await sleep();
  rainbowTitle.stop();
}

async function askNameAndCreatePlayer() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });

  player = new Player(answers.player_name, { hp: 10, weapon: 'Iron Sword' });
  console.log(`Welcome, ${player.name}. You are starting adventure with ${player.level} level, ${player.weapon} and ${player.hp} HP.`)
}

async function handleBattleResult (player, enemy, loot){
  const spinner = createSpinner().start();

  if(player.isDead()){
    spinner.error ({text: `💀💀💀 Game over, ${player.name} is dead!`});
    process.exit (1);
  }

  if(enemy.isDead()){
    spinner.success({ text: `${enemy.name} is defeated` });
    player.levelUp();
    console.log(`Your level increased to ${player.level}`);
    player.stashItem(loot);

    const decisions = await inquirer.prompt({
      name: 'decision',
      type: 'list',
      message: 'What to do next?',
      choices: [
        'Go home',
        'Proceed',
      ],
    });

    if(decisions.decision === 'Go home') {
      process.exit (1);
    }
  }
}

async function firstFight() {
  const undead = new MonsterFactory().createMonster('undead');
  const battle = new Fight(player, undead);
  const loot = new Item('Some shiny stuff');

  await battle.fight();

  return handleBattleResult(player, undead, loot);
}

async function secondFight() {
  const ork = new MonsterFactory().createMonster('ork');
  const battle = new Fight(player, ork);
  const loot = new Item(`Orks' head`);

  await battle.fight();

  return handleBattleResult(player, ork, loot);
}

function congratulate(){
  console.clear();

  console.log(`Congratulations, you have survived`);
  console.log(`Level: ${player.level}`);
  console.log(`Loot collected: ${player.items}`);

  process.exit(0);
}

// Run it with top-level await
console.clear();

await startAdventure();
await askNameAndCreatePlayer();

await firstFight();
await secondFight();

await congratulate();
