import React from 'react';
import { useTranslation } from 'react-i18next';
import UserForm from '../features/users/UserForm';

const Test2: React.FC = () => {
    const { t } = useTranslation();
  
    return (
      <div>
        <h1>{t('titleTest2')}</h1>
         <UserForm></UserForm>
      </div>
    );
  };
  
  export default Test2;

