

---
- **type**:: #lesson
- **domain**:: #Physique-Chimie 
- **title**:: corps_pure_melange
- **level**:: #college_5
- **status**:: done
- **created**:: 2023-03-13 16:04:11
- **updated**:: 2023-03-13 16:04:11
---

# 1	corps_pure_melange

## 1.1	mélanges et constituants 
---


eau minérale: eau + sels minéraux
les séparer: en chauffant ou en évaporant

## 1.2	Définitions
---
<font color="#ff0000">mélange homogène:</font>  mélange ou l'on distingue qu'un seul constituants
<font color="#ff0000">mélange hétérogène:</font> mélange ou l'on distingue plusieurs constituants 


## 1.3	Idées a retenir
---



```mermaid
stateDiagram-v2 
    [*] --> Experience1
    Experience1 --> a1
    a1 --> a2
    a2 --> [*]

    [*] --> Experience2
    Experience2 --> a3
    a3 --> test
    test --> no
    test --> yes
    yes --> [*]
 
```


```mermaid
stateDiagram-v2
state if_state <<choice>>
        [*] --> IsPositive
        IsPositive --> if_state
        if_state --> False: if n < 0
        if_state --> True : if n >= 0
```






---

## 1.4	Liens

Note :  Noter les liens interessant se rapportant au sujet

- liens1
- liens2

## 1.5	Outils utiles

-   [Resoomer](https://resoomer.com/fr) : en ligne + extension navigateur, multilingue
-   [SMMRY](https://smmry.com/) : en ligne, anglais
-   [Text Summarizer](http://textsummarization.net/text-summarizer) : en ligne, anglais
-   [Text Compactor](https://www.textcompactor.com/) : en ligne, anglaisstateDiagram-v2
        state if_state <<choice>>
        [*] --> IsPositive
        IsPositive --> if_state
        if_state --> False: if n < 0
        if_state --> True : if n >= 0
stateDiagram-v2
        state if_state <<choice>>
        [*] --> IsPositive
        IsPositive --> if_state
        if_state --> False: if n < 0
        if_state --> True : if n >= 0
