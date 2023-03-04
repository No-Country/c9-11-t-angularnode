# Urban Food

Urban Food is a fast food restaurant. We created an e-commerce website that allows clients to make orders. The client can visualize the different products of the restaurant and add them to his cart. Once the checkout process is finished, the user will be redirected to WhatsApp, with a pre-created message that contains the order details.
## Documentation
API Reference:
https://documenter.getpostman.com/view/15080099/2s93CKPEBm


## 🚀 Technologies
***Backend*** : Typescript, NodeJS, Prisma, JWT, Cloudinary, and PostgreSQL.

***Frontend***: React, MaterialUI, Bootstrap. 

Deployed on Vercel and Render.
## ✏️Authors
Pamich, Gabriel - Fullstack Developer 
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gpamic)[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/thadek)

Garcia, Rossmery - Fullstack Developer 
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rossmerygarcia/)[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rossmery-garcia)

Mortensen, Gabriela Esther - UX/UI Designer 
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriela-esther-mortensen/)





## 🚀 Getting Started
1.  Install the dependencies using npm install.
2. Create an enviroment file with this content:
```
JWT_SECRET=
JWT_EXPIRES_IN=
PORT=
DATABASE_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_UPLOAD_PRESET=
 ```
 3. Run  ``` npx prisma generate  ``` and
 ``` npx prisma migrate dev ``` to create migrations and prisma client.

4. Run ```npm run prisma``` and ```npm run seed``` to seed example data.


