export type DataUser = {
    id: string;
    name: string;
    email: string;
}
type userRepository = {
    create(data:DataUser): Promise<DataUser | undefined> 
}

export const userServices = {
   async create(data: DataUser, userRepository:userRepository){
    const {id, name, email} = data;

    const user = {
        id,
        name,
        email,
    };

   try {
    const userCreated = await userRepository.create(user)
     return userCreated;

   } catch (error) {
    console.error(error);
    
   }
    },
} 