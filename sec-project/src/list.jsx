
function List(){
 const fruits=[{id:1,name:"apple",calories:95},
               {id:2,name:'orange',calories:45},
               {id:3,name:'banana',calories:105},
               {id:4,name:'coconut',calories:159},
               {id:5,name:'pineapple',calories:37}];


//fruits.sort((a,b) => a.name.LocaleCompare(b.name)); //Alphabetically
//fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse Alphabetically
//fruits.sort ((a,b) => a.calories-b.calories); //numeric
fruits.sort((a,b)=> b.calories - a.calories);
              
 
 const ListItems=fruits.map(fruit=><li key={fruit.id}>
                                    {fruit.name}: &nbsp;
                                   <b>{fruit.calories}</b>  
                                    </li>)
 return(
   <ol>{ListItems}</ol>
 );
}
export default List