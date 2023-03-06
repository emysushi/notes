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



## WEEKLY_TODO

- [ ]  #Francais #_revision <% "@{"+qmonday+"}" %>
- [ ]  #Chinois #_revision  <% "@{"+qmonday+"}" %>
- [ ]  #Histoire-Geographie #_revision  <% "@{"+qmonday+"}" %>
- [ ] #Education-Musicale #_revision <% "@{"+qmonday+"}" %>
- [ ]  #Khan #_exercice <% "@{"+qmonday+"}" %>

- [ ] #Technologie #_revision <% "@{"+qtuesday+"}" %>
- [ ]  #Francais #_revision <% "@{"+qtuesday+"}" %>
- [ ]  #Anglais  #_revision <% "@{"+qtuesday+"}" %>
- [ ]  #Histoire-Geographie  #_revision <% "@{"+qtuesday+"}" %>
- [ ]  #Physique-Chimie #_revision <% "@{"+qtuesday+"}" %>
- [ ]  #Khan #_exercice <% "@{"+qtuesday+"}" %>

- [ ] #Mathematiques  #_revision <% "@{"+qwednesday+"}" %>
- [ ] #Francais  #_revision <% "@{"+qwednesday+"}" %>
- [ ] #Chinois #_revision <% "@{"+qwednesday+"}" %>
- [ ] #Khan #_exercice <% "@{"+qwednesday+"}" %>

- [ ] #Eps  <% "@{"+qthursday+"}" %>
- [ ]  #Svt  #_revision <% "@{"+qthursday+"}" %>
- [ ] #Mathematiques #_revision <% "@{"+qthursday+"}" %>
- [ ] #Anglais #_revision <% "@{"+qthursday+"}" %>
- [ ] #Khan #_exercice <% "@{"+qthursday+"}" %>

- [ ] #Histoire-Geographie  #_revision <% "@{"+qfriday+"}" %>
- [ ]  #Anglais  #_revision <% "@{"+qfriday+"}" %>
- [ ] #Arts-Plastiques  #_revision <% "@{"+qfriday+"}" %>
- [ ]  #Mathematiques  #_revision <% "@{"+qfriday+"}" %>
- [ ]  #Svt  #_revision <% "@{"+qfriday+"}" %>
- [ ] #Khan #_exercice <% "@{"+qfriday+"}" %>

- [ ] #Khan #_exercice <% "@{"+qsaturday+"}" %>

- [ ] #Khan #_exercice <% "@{"+qsunday+"}" %>


## DAILY_TODO



## DAILY_TOCKECK



## WEEKLY_DONE

**Complete**






%% kanban:settings
```
{"kanban-plugin":"basic","new-note-template":"Template/tpl-kanban-note.md","hide-tags-display":true,"tag-colors":[{"tagKey":"#revision","color":"","backgroundColor":"rgba(9, 237, 19, 0.1)"},{"tagKey":"","color":"","backgroundColor":""}]}
```
%%