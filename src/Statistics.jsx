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
            <div className="ml-[30%]">
                <PieChart width={500} height={500}>
                    <Pie data={data} dataKey="students" outerRadius={250} fill="green" />  
                </PieChart>          
            </div>
            <div className="flex justify-around my-10">
                <h3>Your Donation</h3>
                <h3>Total Donation</h3>
                </div>

        </div>
    );
};

export default Statistics;