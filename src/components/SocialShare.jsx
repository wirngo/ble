import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const SocialShare = ({ url, title }) => {
  return (
    <div className="flex space-x-4">
      <FacebookShareButton url={url} quote={title}>
        <FaFacebook className="text-2xl text-blue-600" />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <FaTwitter className="text-2xl text-blue-400" />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title}>
        <FaWhatsapp className="text-2xl text-green-500" />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShare;
