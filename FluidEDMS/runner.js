var express = require('express');
var gqlHttp = require('express-graphql');
var {buildSchema} = require('graphql');

var schemaHello = buildSchema(`type Query {hello: String}`);
 
var schemaBye = buildSchema('type Query {scheme: String}');

var schemaTypes = buildSchema(`type Query {
    quoteofTheDay: String
    random: Float!
    rollThreeDice: [Int]
}`);
var schemaTypesArs = buildSchema(`type Query {
    rollDice(numDice:Int!, numSides:Int): [Int]
}`);

var schemaCustypes = buildSchema(`
type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!):[Int]
}

type Query {
    getDie(numSides:Int): RandomDie
}
`);
var sides = 20;
var dice = 4;
var root = {
    hello:()=> {
        return `Hello World!`;
    }, 
    scheme:()=>{
        return `This is the Mega Scheme of GraphQL`;
    },
    quoteofTheDay:()=>{
        return Math.random()<0.5 ? 'Take it easy':'Salvation lies within';
    },
    random: ()=>{
        return Math.random();
    },
    rollThreeDice:()=>{
        return [1,2,3].map(_=>1+Math.floor(Math.random()*6));
    },
    rollDice:({numDice,numSides})=>{
        var retVal = [];
        for(var i=0;i<numDice;i++){
            retVal.push(1+Math.floor(Math.random()*(numSides || 6)));
        }
        return retVal;
    },
    getDie:({numSides})=>{
        return new RandomDie(numSides || 6);
    },
};

class RandomDie{
    constructor(numSides){
        this.numSides = numSides;
    }

    rollOnce(){
        return 1 + Math.floor(Math.random() * this.numSides);
    }

    roll({numRolls}){
        var retVal = [];
        for(var cx = 0; cx<numRolls;cx++){
            retVal.push(this.rollOnce());
        }
        return retVal;
    }
}

var app= express();
app.use('/gql',gqlHttp({schema: schemaCustypes, rootValue: root, graphiql: true}));
app.listen(3100);
console.log(`Running a GraphQL API Server at localhost:3100/gql`);