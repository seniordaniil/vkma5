import React, { FC } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import Logo from 'ui/logo';
import VKLogo from 'ui/vk-logo';
import RubiconLogo from 'ui/rub1.png';
import SbLogo from 'ui/sb-logo';
import SenlaLogo from 'ui/senla-logo';
import MaximasterLogo from 'ui/maximaster-logo';
import SCLogo from 'ui/sc-logo';
import Arrow from 'ui/arrow-right';

const Div = styled.div`
  width: 960px;
  margin: 0 auto;
`;

const Box = styled.div<SpaceProps>`
  ${space}
`;

const Menu = styled.menu`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > * {
    margin-right: 32px;

    &:last-child {
      margin-right: 0px;
    }
  }

  & > li {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 170%;
    list-style: none;
    color: #000000;
    cursor: pointer;
  }
`;

const Button = styled.button`
  height: 40px;
  padding: 0 16px;
  background-color: rgba(0, 133, 253, 1);
  border-radius: 5px;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 170%;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Button2 = styled.button`
  height: 58px;
  padding: 0 24px;
  background-color: rgba(0, 133, 253, 1);
  border-radius: 5px;
  color: #ffffff;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 160%;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > * {
    margin-right: 44px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

const Header = styled.header`
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Desc = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 24px;
  color: #000000;
`;

const Title1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 64px;

  color: #000000;
`;

const Title2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 25px;
  color: #000000;
`;

const Title3 = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 64px;
  color: rgba(255, 255, 255, 1);
`;

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 170%;
  color: #000000;
`;

const Text2 = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  /* or 25px */
  color: #000000;
`;

const Text3 = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #ffffff;
`;

const SubTitle1 = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
`;

const LogoWrapper = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 120px;
`;

const Promo = styled.div`
  background-color: #0085fd;
  padding: 140px 0;
`;

const PromoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 120px;
`;

const PromoSubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Footer = styled.footer`
  background: #1a1a1a;
  padding: 108px 0;
`;

const FooterLink = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const App: FC = () => {
  return (
    <>
      <Div>
        <Header>
          <Logo />
          <Nav>
            <Menu>
              <li>Организаторы</li>
              <li>Призы</li>
              <li>FAQ</li>
            </Menu>
            <Button>Принять участие</Button>
          </Nav>
        </Header>
        <Box mt={'116px'}>
          <Desc>24 - 25 апреля • online</Desc>
        </Box>
        <Box mt={'28px'}>
          <Title1>IT-марафон «Вездекод» в Туле 🚀</Title1>
        </Box>
        <Box mt={'28px'}>
          <Text>
            Первый этап IT-марафона “Вездекод” для разработчиков и дизайнеров от
            Команды Вконтакте. Участники с лучшими результатами получат
            приглашение на финал в Санкт-Петербурге, а лидеры — денежный приз в
            размере 100 000 рублей
          </Text>
        </Box>
        <Box mt={'32px'}>
          <Button2>ПРИНЯТЬ УЧАСТИЕ</Button2>
        </Box>
        <Box mt={'140px'}>
          <Title1>Организаторы и партнеры 👋🏻</Title1>
        </Box>
        <Box mt={'90px'}>
          <Grid>
            <div>
              <LogoWrapper>
                <VKLogo />
              </LogoWrapper>
              <Box mt={'24px'}>
                <Title2>Команда Вконтакте</Title2>
              </Box>
              <Box mt={'8px'}>
                <Text2>
                  Команда, которая создает ВКонтакте - крупнейшую социальную
                  сеть в России и странах СНГ
                </Text2>
              </Box>
            </div>
            <div>
              <LogoWrapper>
                <img alt={''} src={RubiconLogo} />
              </LogoWrapper>
              <Box mt={'24px'}>
                <Title2>РУБИКОН</Title2>
              </Box>
              <Box mt={'8px'}>
                <Text2>
                  Академия, которая специализируется на профессиональном
                  компьютерном образовании
                </Text2>
              </Box>
            </div>
            <div>
              <LogoWrapper>
                <SbLogo />
              </LogoWrapper>
              <Box mt={'24px'}>
                <Title2>SmartBear</Title2>
              </Box>
              <Box mt={'8px'}>
                <Text2>
                  Компания, создающая решения для управления жизненным циклом
                  API, автоматизации тестирования, тест-менеджмента,
                  нагрузочного тестирования и код-ревью
                </Text2>
              </Box>
            </div>
            <div>
              <LogoWrapper>
                <SenlaLogo />
              </LogoWrapper>
              <Box mt={'24px'}>
                <Title2>Senla</Title2>
              </Box>
              <Box mt={'8px'}>
                <Text2>
                  Международная компания по разработке заказного ПО в областях
                  финансовых технологий, медицины, фармацевтики, нефтегазового
                  сектора, машиностроения и производства, онлайн-бизнеса и
                  других.
                </Text2>
              </Box>
            </div>
            <div>
              <LogoWrapper>
                <MaximasterLogo />
              </LogoWrapper>
              <Box mt={'24px'}>
                <Title2>Веб-интегратор Максимастер</Title2>
              </Box>
              <Box mt={'8px'}>
                <Text2>
                  Веб-интегратор, который с 2002 года разрабатывает и
                  поддерживает технически сложные высоконагруженные веб-проекты
                  для лидеров российского бизнеса.
                </Text2>
              </Box>
            </div>
            <div>
              <LogoWrapper>
                <SCLogo />
              </LogoWrapper>
              <Box mt={'24px'}>
                <Title2>SafeCafe</Title2>
              </Box>
              <Box mt={'8px'}>
                <Text2>
                  Компания, которая занимается разработкой инструментов для
                  защиты персональных данных и финансов интернет-пользователей
                </Text2>
              </Box>
            </div>
          </Grid>
        </Box>
      </Div>
      <Box mt={'140px'}>
        <Promo>
          <Div>
            <Box>
              <Title3>Призы 🔥</Title3>
            </Box>
            <Box mt={'56px'}>
              <PromoGrid>
                <div>
                  <SubTitle1>Отборочный этап в Туле</SubTitle1>
                  <Box mt={'32px'}>
                    <PromoSubGrid>
                      <Text3>1 место</Text3>
                      <Text3>100 000 руб</Text3>
                      <Text3>Топ-8 лучших </Text3>
                      <Text3>Приглашение на финал в Санкт-Петербурге</Text3>
                    </PromoSubGrid>
                  </Box>
                </div>
                <div>
                  <SubTitle1>Весь марафон Вездекод</SubTitle1>
                  <Box mt={'32px'}>
                    <PromoSubGrid>
                      <Text3>1 место</Text3>
                      <Text3>500 000 руб</Text3>
                      <Text3>2 место</Text3>
                      <Text3>300 000 руб</Text3>
                      <Text3>3 место</Text3>
                      <Text3>200 000 руб</Text3>
                    </PromoSubGrid>
                  </Box>
                </div>
              </PromoGrid>
            </Box>
          </Div>
        </Promo>
      </Box>
      <Footer>
        <Div>
          <FooterLink>
            <SubTitle1>Читать FAQ и правила соревнования</SubTitle1>
            <Arrow />
          </FooterLink>
        </Div>
      </Footer>
    </>
  );
};
