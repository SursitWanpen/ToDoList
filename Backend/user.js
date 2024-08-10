import axios from 'axios';
import { promises as fs } from 'fs';
const API = 'https://66b613d4b5ae2d11eb65d19c.mockapi.io/UserPass';
async function API_DATA  () {
    try {
        const response = await axios.get(API);
        const data = response.data;
        const filename = './Backend/data.json';
        await fs.writeFile(filename, JSON.stringify(data,'',3));
        console.log('อัพเดตไฟล์สำเร็จ');
    } catch (error) {
        console.log(error.massage);
    }
};
API_DATA()