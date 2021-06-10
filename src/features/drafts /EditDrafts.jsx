import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import { useEditDraftStyles } from './styles';
import { Editor } from '@tinymce/tinymce-react';
function EditDrafts() {
  const classes = useEditDraftStyles()
  return (
    <Container maxWidth='md' className={classes.cardGrid}>
      <Grid container wrap='nowrap'
            direction="column"
            justify="space-evenly"
            alignItems='flex-start'
>
        <Typography variant='h3' align='center' className={classes.form}>Редактиование</Typography>
        <TextField fullWidth  className={classes.form} type='text' variant='outlined' />
      </Grid>
      <Editor
        initialValue=""
        apiKey="jlz8bac87srss3dre4jzt1fhtk9w6fs6sg8l7ywftd113tv8"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <Button variant="contained" color="primary" className={classes.btn}>
        Сохранить
      </Button>
    </Container>
  );
}

export default EditDrafts;