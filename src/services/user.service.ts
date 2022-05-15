import { User } from '../types/user'
import {client} from "./http-client";

export const userService = {
  getAll: async (): Promise<User[]> => {
    const { data } = await client.get<User[]>('/users')
    return data
  }
}
