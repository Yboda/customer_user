'use client';

import Apis from '@/apis';
import {Box, Button, TextField, Typography} from '@mui/material';
import {Form, Formik, useFormikContext} from 'formik';
import * as Yup from 'yup';
import {useAuthStore} from '@/store/authStore';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export default function Login() {
  const [error, setError] = useState<string>('');
  const {actions, user} = useAuthStore(state => ({...state}));
  const router = useRouter();

  const handleLogin = async ({userId, password}: {userId: string; password: string}) => {
    const res = await Apis.AuthApi.login({username: userId, password});

    setError('');

    if (res) {
      const {code, message, data} = res;
      console.log('res', res);
      if (code === 0) {
        if (data) {
          await localStorage.setItem('AccessToken', `Bearer_${data.AccessToken}`);
          await localStorage.setItem('RefreshToken', `Bearer_${data.RefreshToken}`);

          const me = await Apis.AuthApi.me();

          console.log('me---->', me);
          if (me) {
            actions.login({
              user: me,
            });

            console.log(user);
            router.replace('/customer');
          }
        }
      } else {
        console.log(error);
        setError(message);
      }
    } else {
      console.debug(res);
      setError('SERVER ERROR');
    }
  };

  const initialValues = {
    userId: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    userId: Yup.string()
      .min(5, 'User ID must be between 5 and 20 characters long.')
      .max(20, 'User ID must be between 5 and 20 characters long.')
      .required('User ID must be required'),
    password: Yup.string()
      .min(10, 'Password must be between 10 and 20 characters long.')
      .max(20, 'Password must be between 10 and 20 characters long.')
      .required('Password must be required'),
  });

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2>USER LOGIN</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, formikHelpers) => {
          handleLogin(values);
        }}
      >
        {({values, touched, errors, handleChange, handleBlur}) => (
          <Form>
            <Box>
              <Typography>ID</Typography>
              <TextField
                name={'userId'}
                type={'text'}
                value={values.userId}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.userId && errors.userId)}
                helperText={touched.userId && errors.userId}
              />
            </Box>
            <Box>
              <Typography>PASSWORD</Typography>
              <TextField
                name={'password'}
                type={'password'}
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
            </Box>
            {error && <Typography sx={{color: 'red'}}>{error}</Typography>}
            <Button type={'submit'} fullWidth variant={'outlined'}>
              로그인
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
