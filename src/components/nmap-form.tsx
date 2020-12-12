import { Formik, Form, Field } from 'formik';
import { FunctionComponent } from 'react';
import * as Yup from 'yup';
import { Input, Button } from '@chakra-ui/react';

import InputField from './form-input';

import styles from 'styles/nmap-form.module.scss';
import { format } from 'prettier';

export const validationSchema = Yup.object().shape({
  'ip-address': Yup.string().required(),
});

export const NmapForm: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ 'ip-address': '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values);
          console.log('mitä vittua');
          console.log('perkele ');
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <InputField name="ip-address" placeholder="IP-address" />
            <Button colorScheme={'brand'} type="submit" disabled={isSubmitting}>
              Start
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NmapForm;
