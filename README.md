# Cars App to Provide Car Name and Value

User input submits a car's name and cost into a state array. A total cost amount of all of the cars will be
kept track of. A search of a car's name will list which cars have been added to the list and will also display
a total cost of the listed cars.

### Redux Store Design practice.

What state will be needed?

-   name: string
-   cost: number
-   searchTerm: string
-   cars: [] as {id, name, cost}[]

What will derived state (values calculated using existing state) be?

-   totalCost: number
-   matchedCars
