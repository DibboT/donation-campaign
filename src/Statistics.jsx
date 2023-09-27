import { PieChart, Pie } from 'recharts';

const Statistics = () => {
    const data = [
        { name: 'Geeksforgeeks', students: 400 },
        { name: 'Technical scripter', students: 700 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-o-mania', students: 1000 }
    ];
    return (
        <div>
            <div className="ml-[40%]">
                <PieChart width={300} height={300}>
                    <Pie data={data} dataKey="students" outerRadius={150} fill="green" />  
                </PieChart>          
            </div>
            <div className="flex justify-around my-10">
                <div>
                <h3>Your Donation</h3>
                </div>
                <div>
                <h3>Total Donation</h3>
                </div>
                
                </div>

        </div>
    );
};

export default Statistics;