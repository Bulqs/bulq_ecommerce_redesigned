'use server'
import { revalidatePath } from "next/cache";
import {
    BASE_URL,
    PagedResponse,
    RegisterUser,
  } from "../../types";
  import { FetchError } from "../FetchError";
import { json } from "stream/consumers";

  export type AuthRequest = {
    email: string;
    password: string;
};

export type AuthResponse = {
    message: string;
};

const test_url: string = "http://localhost:8080/api/v1/auth";

export async function Register(payload: RegisterUser): Promise<AuthResponse> {
    if (payload.email == null || payload.password == null) {
        return Promise.reject({
            status: 400,
            message: 'Bad credentials',
        });
    }

    console.log(BASE_URL);

    // Verify credentials && get the user
    const apiUrl = new URL(`${test_url}/users/register`);
    console.log(apiUrl);

    // Construct the headers
    const headers: HeadersInit = {
        'Content-Type': 'application/json'
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload), // Corrected this line
        });

        if (!response.ok) {
          if (response.status === 400) {
              throw new FetchError(response.status, `Problem registering user`);
          }
          throw new FetchError(response.status, `Failed to register user: ${response.statusText}`);
      }

         // Expecting a string response
         const { message } = (await response.json()) as AuthResponse;

         return {message};
    } catch (error) {
        // Custom error handling logic
        if (error instanceof FetchError) {
            return Promise.reject({
                status: error.status,
                message: error.message,
            });
        }
        return Promise.reject({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}