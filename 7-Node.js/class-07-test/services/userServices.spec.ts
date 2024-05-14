import { describe, expect, it } from "vitest";
import { userServices } from "./userServices";
import { userRopositoryInMemory } from "../src/repositories/userRepositoryInMemory";

describe("test user create funcion", () => {
    it("shoud create a user", async () => {
        const user = {
            id:"1",
            name: "Mauricio Gomes de Souza",
            email: "gomizmauricio@gmail.com"
        }

        const userCreated = await userServices.create(user, userRopositoryInMemory);
        expect(userCreated).toHaveProperty("id")
        expect(userCreated).toHaveProperty("name")
        // expect(userCreated).toHaveProperty(["id", "name"])
    })
})