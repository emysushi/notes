---

kanban-plugin: basic

---

<%*
qmonday = tp.date.now("YYYY-MM-DD")
qtuesday = tp.date.now("YYYY-MM-DD",1)
qwednesday= tp.date.now("YYYY-MM-DD",2)
qthursday = tp.date.now("YYYY-MM-DD",3)
qfriday = tp.date.now("YYYY-MM-DD",4)
qsaturday= tp.date.now("YYYY-MM-DD",5)
qsunday= tp.date.now("YYYY-MM-DD",6)
titleName = "Planning_"+ qmonday
await tp.file.rename(titleName)

-%>




## LUNDI <% qmonday %>

- [ ] #revision  #Francais
- [ ] #revision #Chinois
- [ ] #revision  #Histoire-Geographie
- [ ] #revision  #Education-Musicale
- [ ] #_exercice #Khan


## MARDI  <% qtuesday %>

- [ ] #revision #Technologie
- [ ] #revision #Francais
- [ ] #revision  #Anglais
- [ ] #revision #Histoire-Geographie
- [ ] #revision  #Physique-Chimie
- [ ] #_exercice #Khan


## MERCREDI  <% qwednesday %>

- [ ] #revision #Mathematiques
- [ ] #revision #Francais
- [ ] #revision  #Chinois
- [ ] #_exercice #Khan


## JEUDI  <% qthursday %>

- [ ] #Eps
- [ ] #revision #Svt
- [ ] #revision #Mathematiques
- [ ] #revision #Anglais
- [ ] #_exercice #Khan


## VENDREDI  <% qfriday %>

- [ ] #revision #Histoire-Geographie
- [ ] #revision #Anglais
- [ ] #revision #Arts-Plastiques
- [ ] #revision #Mathematiques
- [ ] #revision #Svt
- [ ] #revision #Khan


## SAMEDI  <% qsaturday %>

- [ ] #_exercice #Khan


## DIMANCHE  <% qsunday %>

- [ ] #_exercice #Khan




%% kanban:settings
```
{"kanban-plugin":"basic","new-note-template":"Template/tpl-kanban-note.md","hide-tags-display":true,"tag-colors":[{"tagKey":"#revision","color":"","backgroundColor":"rgba(9, 237, 19, 0.1)"},{"tagKey":"","color":"","backgroundColor":""}]}
```
%%