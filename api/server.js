//

const express=require('express');
const tasks=require('./routes/routes')
const cors=require('cors');
const app=express();


app.use(cors());
app.use(express.json());
app.use('/api/ethereum',tasks);
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}) 
