import React, { useState } from 'react';
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { useAddDraftStyles } from './styles';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addDraft } from './draftsSlice';

function EditDrafts() {
  const classes = useAddDraftStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [titleValue, setTitleValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleAddDraft = () => {
    dispatch(addDraft({ title: titleValue, text: textValue })).then(() => {
      history.push('/agency');
    });
  };

  return (
    <Container className={classes.root} maxWidth="md">
      <Grid container>
        <Grid item>
          <Typography
            variant="h4"
            align="center"
            className={classes.addingTitle}
          >
            Создать черновик
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Paper>
          <Grid item>
            <TextField
              fullWidth
              className={classes.form}
              type="text"
              variant="outlined"
              value={titleValue}
              onChange={handleTitleChange}
            />
          </Grid>
          <Grid item xs={12} className={classes.editor}>
            <Editor
              apiKey="jlz8bac87srss3dre4jzt1fhtk9w6fs6sg8l7ywftd113tv8"
              onEditorChange={(newText) => setTextValue(newText)}
              value={textValue}
              init={{
                selector: 'textarea',
                height: 500,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style:
                  'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              }}
            />
          </Grid>
        </Paper>
      </Grid>
      <Grid container justify="flex-end" className={classes.containerForBtns}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddDraft}
            className={classes.btn}
          >
            Сохранить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EditDrafts;
