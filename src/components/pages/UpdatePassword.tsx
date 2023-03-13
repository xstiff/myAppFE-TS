import React, {useState} from 'react';
import {updatePassword} from '../../apiCalls/user.calls';
import {useNavigate} from 'react-router-dom';

export const UpdatePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            alert('Password does NOT match');
            return;
        }
        //data -nowy typ z user.calls = zobaczymy czy zadziała jak odpale

        const data = {
            password: oldPassword,
            newPassword: password,
        };
        const response = await updatePassword(data);
        if (response.status === 200) {
            alert('Password successfully updated.');
            navigate('/user/profile');
        } else {
            alert(response.response.data.msg);
        }
    };

    return (
        <div className="w-1/4 m-auto text-center">
            <h1 className="text-3x1 my-3 font-bold">Update Password</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="password"
                        placeholder="insert old password..."
                        className="focus:outline-none border-none p-2 rounded w-full"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        placeholder="insert new password..."
                        className="focus:outline-none border-none p-2 rounded w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        placeholder="confirm new password..."
                        className="focus:outline-none border-none p-2 rounded w-full"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                </div>
                <button type="submit" className="bg-black text-white w-full py-2">
                    Update Password
                </button>
            </form>
        </div>
    );
};
