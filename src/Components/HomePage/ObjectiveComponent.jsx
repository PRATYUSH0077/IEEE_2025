import React from 'react';
import SingleParagraphSection from './SingleParagraphSection';
import imageSrc from '../../assets/image2.jpg'; // Adjust the path to your image

const ObjectiveComponent = () => (
  <div>
    <SingleParagraphSection
      title="About The Event"
      content="IEEE Madhya Pradesh Section International Conference on Emerging Technologies 2025 (IEEE MPSec ICET 2025) is a premium conference of the IEEE Madhya Pradesh Section Chapter [acceptance awaited]. The conference aims to promote research and networking among academic institutes, R&D institutions, industries and other organisations. The conference invites papers from authors worldwide, while geographically all editions of the conference would be held within the Madhya Pradesh region. The conference will be technically and financially supported by the IEEE MP Section Chapter [acceptance awaited]. All papers presented at the conference will uploaded to IEEE [acceptance awaited]. The conference is being initiated by the Department of Information Technology, ABV-IIITM Gwalior. The future editions of the conference will be held annually on a rotation basis among the collaborating institutions. IEEE MPSec ICET invites papers covering broad topics in the areas of Information Technology, Wireless Communication, Electrical, Computer and Electronics Engineering. This conference will provide an excellent platform for the researchers to present their research work."
      imageSrc={imageSrc}
    />
  </div>
);

export default ObjectiveComponent;
