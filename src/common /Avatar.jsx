import React from 'react';
import ProfileAvatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { useCommonStyles } from './styles';

function Avatar({ imageUrl }) {
  const classes = useCommonStyles();

  return (
    <div className={classes.root}>
      <ProfileAvatar
        alt="Remy Sharp"
        src="https://yandex-images.clstorage.net/o9nm5g408/acc5f9nDQkxr/yE9EX1FZ-vpd6HN2D2GwJBaRbskwae39QYEz-GAznlHmxPdGynn5O_96OrA9-7SX5KA2jvXSk1uVsk-5J1YNL6jusL8VKYvvWZkUY49l5IXjBKsc4dhdPUVAxoghFyrE42cSkst9PD6qbJrwbdpGZUaR0f1CQfGsl3DOCVLjTTt5CpH8s83rWjw5lNQMEgRHtJGs-DOvT79QZ6HYQwYM0aWmB-T4bW58e62O1-hPNbalklMcQcNQLBSAz0vjM19738gwfhNY6cvcinTFTrDUBOcjXtjBDDw9QOaCGWEXLRMFJlYXe81eTBi_PqbInjf3NsDR_cAj8E9HgU7qcaH9C52KkvxCSdsIveoF1P9w1qdXg85oQ86OXIPl8gqDtt8iFzdVFwtfjO763z8Hqu7VdvSQkE7x0FBuxpNfStAx7cuc-3GNYUiJGy4Lx9VcA-T2xQKe2DLdPl9j1ENqYEU_ExUUV6QrTX7tCFwNVnpsx6RG4QBM46ChjhTRH0ggMgwaXOsiHBEIaNnuCxSkrzBkVbQyn7kyTh5tw9bROsEVz-EE5TfGSK_s3xt8fdUrrEUmhKER75Jikd5kwDwZ0nOuCV_LU_2zGSnZHJm29uwixgVnov6ZEo2sbnDmYPiy9Z9BN3SFVOgtjQ4Lfd6mOV-HR8QBI16Rk4Kv5_Ce6NMATkjvK4B-APm7mW9rJRS8EuT2JpP8GEOd_S-iBaPIAWcNYISkBddIzA9PeE99x-vPtDf1E9F88zBDzmXCH8sCEk977Vijr_MretgN28UEfIC0ZuRxrsgRn43MsnbD2KE2TPF2ZmSEKL2_vPktP9RIbgbGNxPRbPDQACzVIF8r0iG_uc0r0r3S25ipD-oWpj0wBNd30TwbwO9OfiIncLkAVQ5y1Je11vnNzYx4Lw8V6F0mpnTjAWwCI8JfxRM_yxFhXZuvOTDdk1qa2D5bdMatoNend4Du23L9zA0yhUDa4"
      />
    </div>
  );
}

Avatar.propTypes = {
  imageUrl: PropTypes.string,
};

export default Avatar;
