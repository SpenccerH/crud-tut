export default function TableList({ handleOpen } : { handleOpen: (mode: 'add' | 'edit') => void }) {

    const headers = [
        { title: ""},
        { title: "Recipe Name" },
        { title: "Meal Type" },
        { title: "Total Time" },
    ]

    const recipes = [
        { id: 1, recipe: "Burger", meal: "Lunch", time: "10 minutes"  },
        { id: 2, recipe: "Sandwich", meal: "Lunch", time: "10 minutes"  },
        { id: 3, recipe: "Cereal", meal: "Breakfast", time: "2 minutes"  },
    ]

    return (
        <>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    <thead>
                        <tr>
                            {headers.map(header => (
                                <th>{header.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="hover">
                        {recipes.map(recipe => (
                            <tr>
                                <th>{recipe.id}</th>
                                <th>{recipe.recipe}</th>
                                <td>{recipe.meal}</td>
                                <td>{recipe.time}</td>
                                <td>
                                    <button onClick={() => handleOpen('edit')} className={`rounded-full bg-slate-200 hover:bg-slate-300 w-20`}>Edit</button>
                                </td>
                                <td>
                                    <button className={`rounded-full bg-slate-200 hover:bg-slate-300 w-20`}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}