

```chartsview
#-----------------#
#- chart type    -#
#-----------------#
type: Bar

#-----------------#
#- chart data    -#
#-----------------#
data:
  - label: "1951"
    value: 38
    serie: tttttt
  - label: "1952"
    value: 52
    serie: jjjj
  - label: "1956"
    value: 61
  - label: "1957"
    value: 145
  - label: "1958"
    value: 48

#-----------------#
#- chart options -#
#-----------------#
options:
  seriesField: serie
  yField: label
  xField: value
```



![[Template/Untitled Diagram.svg]]








```chartsview
#-----------------#
#- chart type    -#
#-----------------#
type: OrganizationTreeGraph

#-----------------#
#- chart data    -#
#-----------------#
data:
  id: "root"
  label: "Root"
  children:
    - id: "c1"
      label: "C1"
      children:
        - id: "c1-1"
          label: "C1-1"
          children:
            - id: "c1-1-1"
              label: "C1-1-1"
            - id: "c1-1-2"
              label: "C1-1-2"
        - id: "c1-2"
          label: "C1-2"
          children:
            - id: "c1-2-1"
              label: "C1-2-1"
            - id: "c1-2-2"
              label: "C1-2-2"
    - id: "c2"
      label: "C2"
      children:
        - id: "c2-1"
          label: "C2-1"
          children:
            - id: "c2-1-1"
              label: "C2-1-1"

#-----------------#
#- chart options -#
#-----------------#
options: {}
```