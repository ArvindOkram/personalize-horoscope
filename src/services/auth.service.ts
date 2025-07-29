import bcrypt from 'bcrypt';
import { IUser } from '../common/interface/user.interface';
import { LoginRequest, LogoutRequest, SignUpRequest } from '../model/request/auth.request';
import { GenericReponse, LoginResponse } from '../model/response/auth.response';
import { createUser, getUser } from '../repositories/user.repository';
import { generateToken, hashPassword } from '../utilites/auth.util';
import { getZodiacSign } from '../utilites/zodiac-mapper.util';

/**
 * Validate user existance and password
 * @param loginRequest 
 * @returns JWT token
 */
const login = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
    try {
        const { email, password } = loginRequest;

        const user = await getUser({ email });

        if (!user) {
            throw new Error('Invalid credentials'); // need to throw 4xx
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        const token = generateToken(email, user._id.toString());
        return { token };
    } catch (err: any) {
        console.log(`Error at [AuthService :: login], err: ${err}`);
        throw err;
    }
}

/**
 * Validate user existance 
 * @param logoutRequest 
 * @returns logout message
 */
const logout = async (logoutRequest: LogoutRequest): Promise<GenericReponse> => {
    try {
        //Token to be deleted by client
        const email = logoutRequest.email;

        const user = await getUser({ email });

        if (!user) {
            throw new Error(`User with ${email} not found`); // need to throw 4xx
        }

        return { message: `Logout successfully for ${email}` };
    } catch (err: any) {
        console.log(`Error at [AuthService :: logout], err: ${err}`);
        throw err;
    }
}

/**
 * Validate user existance and 
 * create user if not exists in DB
 * @param signUpRequest 
 * @returns successful msg
 */
const signUp = async (signUpRequest: SignUpRequest): Promise<GenericReponse> => {
    try {
        const { name, email, password, birthDate } = signUpRequest;

        const user = await getUser({ email });
        if (user) {
            console.warn(`Duplicate registration request received`);
            return {
                message: `Email id ${email} already used`
            }
        }
        const [day, month, year] = birthDate.split('-').map(Number);
        const formattedDob = new Date(year, month - 1, day);

        const userData: IUser = {
            name,
            email,
            password: await hashPassword(password),
            birth_date: formattedDob,
            zodiac: getZodiacSign(formattedDob),
        }

        await createUser(userData);

        return {
            message: `Sign up successful for ${email}`
        };
    } catch (err: any) {
        console.log(`Error at [AuthService :: signUp], err: ${err}`);
        throw err;
    }
}

export default {
    login,
    logout,
    signUp
}