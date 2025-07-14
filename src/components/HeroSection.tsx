import { Container, Title, Text, Button, Group, Stack, Avatar, Grid, Paper, Badge, ThemeIcon } from '@mantine/core'
import { IconDownload, IconMail, IconCalendar, IconUsers, IconTestPipe, IconBrandAzure } from '@tabler/icons-react'
import profilePhoto from '../assets/1670692623760.jpeg'

export function HeroSection() {
  return (
    <Paper p="xl" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <Container size="xl" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        <Grid align="center" gutter="md" justify="center">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack align="center" gap="xl">
              <Avatar 
                size={280} 
                radius="md" 
                src={profilePhoto}
                alt="Stefan Radev"
              />
            </Stack>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="xl">
              <div>
                <Badge size="lg" variant="dot" mb="md">
                  QA Team Lead & Automation Engineer
                </Badge>
                <Title order={1} size="3.5rem" fw={700} mb="md">
                  Stefan Radev
                </Title>
                <Text size="lg" c="dimmed" maw={600}>
                  QA Team Lead at Denshi AD with over 4 years of experience in quality assurance. 
                  I specialize in test automation with Playwright, Python, BDD approach and CI/CD integration.
                  I lead QA team, mentor junior specialists and coordinate testing activities.
                </Text>
              </div>

              <Group gap="md">
                <Button 
                  size="lg" 
                  leftSection={<IconDownload size={20} />}
                  variant="filled"
                  component="a"
                  href="https://rb.gy/bf6h3/"
                  target="_blank"
                >
                  Download CV
                </Button>
                <Button 
                  size="lg" 
                  leftSection={<IconMail size={20} />}
                  variant="light"
                  component="a"
                  href="mailto:stefan.radev91@gmail.com"
                >
                  Get in touch
                </Button>
              </Group>

              <Group gap="lg" mt="xl" justify="flex-start">
                <div style={{ textAlign: 'center' }}>
                  <ThemeIcon size="xl" color="blue" variant="light" mb="md" mx="auto">
                    <IconCalendar size={32} />
                  </ThemeIcon>
                  <Text size="lg" fw={700} c="blue">
                    4+
                  </Text>
                  <Text size="sm" c="dimmed">
                    Years QA Experience
                  </Text>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <ThemeIcon size="xl" color="green" variant="light" mb="md" mx="auto">
                    <IconUsers size={32} />
                  </ThemeIcon>
                  <Text size="lg" fw={700} c="green">
                    Team Lead
                  </Text>
                  <Text size="sm" c="dimmed">
                    Current Position
                  </Text>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <ThemeIcon size="xl" color="orange" variant="light" mb="md" mx="auto">
                    <IconTestPipe size={32} />
                  </ThemeIcon>
                  <Text size="lg" fw={700} c="orange">
                    BDD/Pytest
                  </Text>
                  <Text size="sm" c="dimmed">
                    Automation Approaches
                  </Text>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <ThemeIcon size="xl" color="violet" variant="light" mb="md" mx="auto">
                    <IconBrandAzure size={32} />
                  </ThemeIcon>
                  <Text size="lg" fw={700} c="violet">
                    Azure DevOps
                  </Text>
                  <Text size="sm" c="dimmed">
                    CI/CD Integration
                  </Text>
                </div>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Paper>
  )
}