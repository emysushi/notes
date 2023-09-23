
<%*
let qcFileName = await tp.system.prompt("Titre Fiche (ex: Mahomet)")
let qcDomain = tp.file.folder(false)
titleName = "lesson_" + qcFileName
await tp.file.rename(titleName)
-%>


---
- **type**:: #feedback
- **domain**:: <% "#"+ qcDomain %>
- **title**:: <% qcFileName %>
- **level**:: #college_4
- **status**:: inprogress
- **created**:: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
- **updated**:: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss") %>
---


# 1	<% qcFileName %>


## 1.1	Contexte
---



## 1.2	Observations
---










```chartsview
#-----------------#
#- chart type    -#
#-----------------#
type: Radar

#-----------------#
#- chart data    -#
#-----------------#
data:
  - label: A
    value: 2
  - label: B
    value: 5
  - label: " C"
    value: 3

#-----------------#
#- chart options -#
#-----------------#
options:
  xField: label
  yField: value
```



## 1.3	Axes ameliorations
---


