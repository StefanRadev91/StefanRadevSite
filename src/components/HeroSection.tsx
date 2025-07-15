import { Container, Title, Text, Button, Group, Stack, Avatar, Grid, Paper, Badge, ThemeIcon, ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconDownload, IconMail, IconCalendar, IconUsers, IconTestPipe, IconBrandAzure, IconSun, IconMoon } from '@tabler/icons-react'
import profilePhoto from '../assets/1670692623760.jpeg'
import stefanCV from '../assets/StefanR.pdf'
import { useEffect, useRef, useState } from 'react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Paper 
      ref={sectionRef}
      p="xl" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        width: '100%', 
        maxWidth: '100vw', 
        overflowX: 'hidden',
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.8s ease-out',
        position: 'relative'
      }}
    >
      <ActionIcon 
        variant="subtle" 
        size="lg" 
        radius="md"
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
        style={{ 
          transition: 'all 0.2s ease',
          color: 'var(--mantine-color-text)',
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 10
        }}
        styles={{
          root: {
            '&:hover': {
              backgroundColor: 'var(--mantine-color-default-hover)'
            }
          }
        }}
      >
        {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
      </ActionIcon>
      
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

              <div>
                <Group gap="md" justify="center" hiddenFrom="md">
                  <Button 
                    size="lg" 
                    leftSection={<IconDownload size={20} />}
                    variant="filled"
                    component="a"
                    href={stefanCV}
                    download="Stefan_Radev_CV.pdf"
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
                
                <Group gap="md" justify="flex-start" visibleFrom="md">
                  <Button 
                    size="lg" 
                    leftSection={<IconDownload size={20} />}
                    variant="filled"
                    component="a"
                    href={stefanCV}
                    download="Stefan_Radev_CV.pdf"
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
              </div>

              <div>
                <Group gap="lg" mt="xl" justify="center" hiddenFrom="md">
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
                
                <Group gap="lg" mt="xl" justify="flex-start" visibleFrom="md">
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
              </div>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Paper>
  )
}