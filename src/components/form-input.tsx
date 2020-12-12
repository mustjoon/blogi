import { Input as ChakraInput } from '@chakra-ui/react';
import { Field } from 'formik';
import { FunctionComponent } from 'react';

import styles from 'styles/input.module.scss';

export const Input: FunctionComponent<any> = (props: any) => {
  return (
    <div className={styles.input_container}>
      <Field name={props.name}>
        {({ field, form: { touched, errors, is, isSubmitting }, meta }) => (
          <div className={isSubmitting ? styles.submitting : ''}>
            <ChakraInput focusBorderColor="brand.400" type="text" placeholder={props.placeholder} {...field} />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
          </div>
        )}
      </Field>
    </div>
  );
};

export default Input;
