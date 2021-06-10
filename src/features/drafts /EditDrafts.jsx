import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { useEditDraftStyles } from './styles';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { editDraft, fetchDrafts, fetchOneDraft } from './draftsSlice';
import DeleteDrafts from './DeleteDrafts';

function EditDrafts() {
  const classes = useEditDraftStyles();
  const id = useParams().id;
  const dispatch = useDispatch();
  const oneDraft = useSelector(state => state.draftsSlice.oneDraft);
  const loading = useSelector(state => state.draftsSlice.oneDraftLoading);
  const [titleValue, setTitleValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleChangeDraft = () => {
    dispatch(editDraft({ title: titleValue, text: textValue, id }));
  };

  useEffect(() => {
    dispatch(fetchOneDraft(id))
  }, [dispatch,id]);

  useEffect(() => {
    setTitleValue(oneDraft.title)
    setTextValue(oneDraft.text)
  }, [oneDraft])

  return (
    <Container maxWidth="md" className={classes.cardGrid}>
      <Grid
        container
        wrap="nowrap"
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Typography variant="h3" align="center" className={classes.form}>
          Редактиование
        </Typography>
        <TextField
          fullWidth
          className={classes.form}
          type="text"
          variant="outlined"
          value={loading? '...': titleValue}
          onChange={handleTitleChange}
        />
      </Grid>
      <Editor
        initialValue={loading? '...': textValue}
        apiKey="jlz8bac87srss3dre4jzt1fhtk9w6fs6sg8l7ywftd113tv8"
        init={{
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
        onChange={handleTextChange}
      />
      <Grid container className={classes.containerForButtons}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={handleChangeDraft}
          >
            Сохранить
          </Button>
        </Grid>
        <Grid item>
          <DeleteDrafts id={id} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default EditDrafts;
