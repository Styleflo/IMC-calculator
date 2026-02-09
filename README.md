# IMC-calculator

## Introduction

Cette application permet de calculer l'IMC d'une personne et de consulter un historique partagé. 
ELle est réalisé dans le cadre du cours Conception et développement de systèmes infonuagiques à l'UQAC.

## Architecture

graph TD
    subgraph Internet
        User((Utilisateur))
    end

    subgraph "Réseau Public (DMZ)"
        FW1[Pare-feu Externe]
        LB[Équilibreur de charge]
    end

    subgraph "Réseau Privé"
        APP1[Serveur App A]
        APP2[Serveur App B]
        DB[(Base de données)]
    end

    User --> FW1
    FW1 --> LB
    LB --> APP1
    LB --> APP2
    APP1 --> DB
    APP2 --> DB
