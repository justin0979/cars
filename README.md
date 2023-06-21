# Cars App to Provide Car Name and Value

User input submits a car's name and cost into a state array. A total cost amount of all of the cars will be
kept track of. A search of a car's name will list which cars have been added to the list and will also display
a total cost of the listed cars.

## Redux Store Design steps

1.  Identify what state exists in the App
2.  Identify how that state changes over time
3.  Group together common pieces of state
4.  Create a slice for each group

### Step 1: ID state

What state will be needed?

-   name: string
-   cost: number
-   searchTerm: string
-   cars: [] as {id, name, cost}[]

What will derived state (values calculated using existing state) be?

-   totalCost: number
-   matchedCars: unknown

**Note:** A good place for derived state is inside of the `useSelector` hooks.
{: .note}

### Step 2: ID how state changes over time

-   name: User input changes the name
-   cost: User input changes the cost
-   searchTerm: User input changes the search term
-   cars: User adds car or removes a car

##### "mini"-reducer functions

-   changeName
-   changeCost
-   changeSearchTerm
-   addCar
-   removeCar

### Step 3: Group together common pieces of state

Below is just one of many possible groupings:

| **State related to adding cars** | **State related to the list of cars** |
| :------------------------------: | :-----------------------------------: |
|        **name** - string         |        **searchTerm** - string        |
|        **cost** - number         |     **cars**: [{name, cost, id}]      |

### Step 4: Create a slice for each group

Below is just one of many possible groupings:

| **Slice for adding cars (Form Slice)** | **Slice for displaying car (Cars Slice)** |
| :------------------------------------: | :---------------------------------------: |
|               changeName               |                changeTerm                 |
|               changeCost               |                  addCar                   |
|                                        |                 removeCar                 |
