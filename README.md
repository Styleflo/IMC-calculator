# IMC-calculator

## Introduction

Cette application permet de calculer l'IMC d'une personne et de consulter un historique partagé. 
ELle est réalisé dans le cadre du cours Conception et développement de systèmes infonuagiques à l'UQAC.

## Architecture

```mermaid
graph LR
    subgraph "Microsoft Azure"
    A[Frontend : React & Tailwind] -- "Requêtes REST (JSON)" --> B[Backend : Node.js & Express]
    B --> C[SQL]
    end

On a donc un serveur web - backend hebergé par Azure avec sa base de donnée et un client - frontend lui aussi hebergé par azure. 
Les deux communiques entres eux.

### Serveur web

Il est réalisé en Node.js et expose une API de type REST.

### Client

Il est réalisé en React + Tailwind et fetch l'API du serveur.


## Démonstration 

Rendez-vous à l'url suivant: 
```https://agreeable-island-0bfe8d51e.1.azurestaticapps.net```
