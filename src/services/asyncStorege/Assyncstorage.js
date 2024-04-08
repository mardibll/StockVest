import { AsyncStorage } from 'react-native';

export const AddClient = async ({ data }) => {
    await AsyncStorage.setItem("Register", data)
}

export const updateClient = async ({ data }) => {
    await AsyncStorage.setItem("Register", data)
}

export const deletetClient = async ({ data }) => {
    try {
        let data = await getData();
        data = removeEntryById(data, idUserToRemove);
        await saveData(data);
      } catch(e) {
        console.error('Error removing and saving entry:', e);
      }
}