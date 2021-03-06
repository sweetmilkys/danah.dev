import anime from 'animejs';
import Card from 'components/about/Card';
import React, { memo, useContext, useEffect, useRef } from 'react';
import ProfileImage from 'static/images/profile.jpg';
import styled, { ThemeContext } from 'styled-components';

import { LINKS } from 'constants/constant';

const MessageBox = styled.div`
  width: 60%;
  color: ${(props) => props.theme.colors.white};
  border-radius: 15px 0 0 15px;
  padding: 50px 40px 20px 40px;
  display: flex;
  flex-direction: column;
  transform: translateX(-700px);

  ${(props) => props.theme.media.small} {
    width: 100%;
    border-radius: 15px;
    box-shadow: ${(props) => props.theme.shadows.md};
    padding: 50px 20px 10px 20px;
  }
`;

const Title = styled.h3`
  padding-bottom: 20px;
`;

const Divider = styled.div`
  height: 3px;
  width: 60px;
  margin: 60px auto 30px 0;
  background-color: currentColor;
`;

const Message = styled.div`
  margin-bottom: 20px;
  line-height: 1.5;

  p {
    padding-bottom: 15px;
  }
`;

const LinkList = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const LinkItem = styled.div`
  margin-right: 8px;
  display: inline-block;

  a {
    width: 100%;
    transition: 0.5s all;
  }
  svg {
    width: 100%;
  }
  span {
    opacity: 0;
    display: block;
    transition: 0.2s;
    box-shadow: ${(props) => props.theme.shadows.tip};
    transform: translateY(0px);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    padding: 2px 8px;
    text-transform: capitalize;
  }
  :hover {
    span {
      opacity: 1;
      transform: translateY(2px);
    }
  }
`;

const ImageBox = styled.div`
  width: 40%;
  border-radius: 0 15px 15px 0;
  transform: translateX(700px);
`;

const ImageItem = styled.img`
  object-fit: cover;
  border-radius: 0 15px 15px 0;

  ${(props) => props.theme.media.small} {
    display: none;
    width: 0;
    height: 0;
  }
`;

type ProfileProps = {
  handleGa: (label: string) => () => void;
};

function Profile(props: ProfileProps) {
  const { handleGa } = props;
  const { colors } = useContext(ThemeContext);
  const messageBoxRef = useRef<HTMLDivElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageBoxRef.current && imageBoxRef.current) {
      messageBoxRef.current.style.transform = 'translateX(-700px)';
      imageBoxRef.current.style.transform = 'translateX(700px)';

      anime({
        targets: messageBoxRef.current,
        translateX: 0,
        duration: 1500,
        easing: 'easeInOutExpo',
      });
      anime({
        targets: imageBoxRef.current,
        translateX: 0,
        duration: 1500,
        easing: 'easeInOutExpo',
      });
    }
  }, []);

  return (
    <Card title="profile" color={colors.pink}>
      <MessageBox ref={messageBoxRef}>
        <Title>Danah Kim</Title>
        <p>Software Engineer | Web Developer</p>
        <Divider />
        <Message>
          <p>
            I'm Developer who mostly works front-end development with TypeScript, React, Node and basically any other
            modern web technology daily! I love to develop and make things, and enjoy solving complex problems with
            simplified solutions and simplifying existing complex methods and procedures.
            <br />I like my code to be elegant, efficient, simple and direct, so when any trouble arises, I try to
            figure out the root cause and make simple then keep it as clean code. Also, where I always try new
            technologies to develop myself in skills that are often difficult to learn working in corporate project.
          </p>
          <p>
            I build beautiful websites deliver performance close to optimal and UX with exceptional technology and
            passion.
          </p>
        </Message>
        <LinkList>
          {Object.entries(LINKS).map(([key, { url, icon: Icon, label }]) => (
            <LinkItem key={key} onClick={handleGa(label)}>
              <a target="_blank" rel="noopener noreferrer" href={url}>
                <Icon />
              </a>
              <span>{key}</span>
            </LinkItem>
          ))}
        </LinkList>
      </MessageBox>
      <ImageBox ref={imageBoxRef}>
        <ImageItem src={ProfileImage} alt="profile" />
      </ImageBox>
    </Card>
  );
}

export default memo(Profile);
