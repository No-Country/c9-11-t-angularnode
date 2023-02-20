//File to create prisma seeds for user and role

import UserService  from '../../src/services/user.service';
import RoleService  from '../../src/services/role.service';

const userService = new UserService();
const roleService = new RoleService();

const adminRole = {
    name: 'Admin',
}

const userRole = {
    name: 'User',
}


const user = {
    name: 'Admin',
    email: 'admin@nctest.com',
    password: 'admin',
    isActive:true,
    phone: '123456789',
    address: '1234 Main St',
    roleId: 1,
}

const user2 = {
    name: 'User',
    isActive:true,
    email: 'user@nctest.com',
    password: 'user',
    phone: '123456789',
    address: '1234 Main St',
    roleId: 2,
}

async function basicSeeds() {
    const adminRoleCreated = await roleService.createRole(adminRole);
    const userRoleCreated = await roleService.createRole(userRole);

    console.log('Roles created: \n');
    console.log(adminRoleCreated, userRoleCreated);

    const userCreated = await userService.create(user);
    const user2Created = await userService.create(user2);

    console.log('Users created');
    console.log(userCreated, user2Created);
    return;
}


basicSeeds();