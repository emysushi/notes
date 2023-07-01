---

kanban-plugin: basic

---

<%*
let qdays = await tp.system.prompt("Lundi prochain dans x jrs")
q1 = qdays*1
q2 = q1+1
q3 = q2+1
q4 = q3+1
q5 = q4+1
q6 = q5+1
q7 = q6+1

qmonday = tp.date.now("YYYY-MM-DD",q1)
qtuesday = tp.date.now("YYYY-MM-DD",q2)
qwednesday= tp.date.now("YYYY-MM-DD",2)
qthursday = tp.date.now("YYYY-MM-DD",3)
qfriday = tp.date.now("YYYY-MM-DD",4)
qsaturday= tp.date.now("YYYY-MM-DD",5)
qsunday= tp.date.now("YYYY-MM-DD",6)

titleName = "Planning_Week_"+ qmonday
await tp.file.rename(titleName)
-%>



## WEEKLY_TODO

- [ ] #Francais #_revision <% "@{"+qmonday+"}" %>
- [ ] #Chinois #_revision  <% "@{"+qmonday+"}" %>
- [ ] #Histoire-Geographie #_revision  <% "@{"+qmonday+"}" %>
- [ ] #Education-Musicale #_revision <% "@{"+qmonday+"}" %>
- [ ] #Khan #_exercice <% "@{"+qmonday+"}" %>
- [ ] #Technologie #_revision <% "@{"+qtuesday+"}" %>
- [ ] #Francais #_revision <% "@{"+qtuesday+"}" %>
- [ ] #Anglais  #_revision <% "@{"+qtuesday+"}" %>
- [ ] #Histoire-Geographie  #_revision <% "@{"+qtuesday+"}" %>
- [ ] #Physique-Chimie #_revision <% "@{"+qtuesday+"}" %>
- [ ] #Khan #_exercice <% "@{"+qtuesday+"}" %>
- [ ] #Mathematiques  #_revision <% "@{"+qwednesday+"}" %>
- [ ] #Francais  #_revision <% "@{"+qwednesday+"}" %>
- [ ] #Chinois #_revision <% "@{"+qwednesday+"}" %>
- [ ] #Khan #_exercice <% "@{"+qwednesday+"}" %>
- [ ] #Eps  <% "@{"+qthursday+"}" %>
- [ ] #Svt  #_revision <% "@{"+qthursday+"}" %>
- [ ] #Mathematiques #_revision <% "@{"+qthursday+"}" %>
- [ ] #Anglais #_revision <% "@{"+qthursday+"}" %>
- [ ] #Khan #_exercice <% "@{"+qthursday+"}" %>
- [ ] #Histoire-Geographie  #_revision <% "@{"+qfriday+"}" %>
- [ ] #Anglais  #_revision <% "@{"+qfriday+"}" %>
- [ ] #Arts-Plastiques  #_revision <% "@{"+qfriday+"}" %>
- [ ] #Mathematiques  #_revision <% "@{"+qfriday+"}" %>
- [ ] #Svt  #_revision <% "@{"+qfriday+"}" %>
- [ ] #Khan #_exercice <% "@{"+qfriday+"}" %>
- [ ] #Khan #_exercice <% "@{"+qsaturday+"}" %>
- [ ] #Khan #_exercice <% "@{"+qsunday+"}" %>


## DAILY_TODO



## DAILY_TOCKECK



## WEEKLY_DONE

**Complete**




%% kanban:settings
```
{"kanban-plugin":"basic","hide-tags-display":true,"tag-colors":[{"tagKey":"_exercice","color":"","backgroundColor":"rgba(4, 239, 15, 0.1)"},{"tagKey":"_control","color":"","backgroundColor":"rgba(240, 108, 108, 0.1)"}],"hide-card-count":false,"date-trigger":"@","time-trigger":"@@","date-colors":[{"distance":1,"unit":"days","direction":"after","backgroundColor":"rgba(242, 5, 5, 0)","isToday":true},{"distance":1,"unit":"days","direction":"after","backgroundColor":"rgba(251, 166, 8, 0)"}],"archive-date-separator":" ","new-note-folder":"Cours/Kanban","hide-date-display":false,"hide-date-in-title":true,"link-date-to-daily-note":false,"date-format":"YYYY-MM-DD ddd","date-display-format":"YYYY-MM-DD ddd"}
```
%%