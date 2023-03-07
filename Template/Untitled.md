





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