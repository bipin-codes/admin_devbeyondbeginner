import { SubmitHandler, useForm } from 'react-hook-form';
import { useLoginAdminMutation } from '../../redux/features/auth/autheApi';

export interface ILogin {
  userid: string;
  password: string;
}

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const [login] = useLoginAdminMutation();

  const onSubmit: SubmitHandler<ILogin> = (formData) => {
    login({ ...formData });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>user_id</label>
        <input {...register('userid', { required: true })}></input>
        <label>password</label>
        <input {...register('password', { required: true })}></input>
        <input type="submit" />
      </form>
      {errors && (
        <div>
          <p>{errors.userid?.type}</p>
          <p>{errors.password?.type}</p>
        </div>
      )}
    </>
  );
};

export default Auth;
