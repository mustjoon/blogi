import { Formik } from 'formik';
import { FunctionComponent } from 'react';
import * as Yup from 'yup';
import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import InputField from './form-input';
import { getNmap } from 'src/slices/nmap';
import styles from 'styles/nmap-form.module.scss';
import { RootState } from 'src/root-reducer';

export interface NmapFormParams {
  ip: string;
}
export const validationSchema = Yup.object().shape({
  ip: Yup.string().required(),
});

const initialValues = { ip: '' };

export const NmapForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const lines = useSelector((state: RootState) => state.nmap.lines);

  const _onSubmit = async (values: NmapFormParams): Promise<void> => {
    dispatch(getNmap(values));
  };

  return (
    <div className={styles.container}>
      {lines.length > 0 && lines.map((line) => <div key={line.message}>{line.message}</div>)}
      <Formik<NmapFormParams>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          await _onSubmit(values);
          resetForm();
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
            <InputField name="ip" placeholder="IP-address" />
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
