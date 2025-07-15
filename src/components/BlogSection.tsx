import { 
  Container, 
  Title, 
  Text, 
  Card, 
  Grid, 
  Group, 
  Stack,
  Image
} from '@mantine/core'
import { useEffect, useRef, useState } from 'react'

export function BlogSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <Container 
      ref={sectionRef}
      size="xl" 
      py="xl" 
      id="blog" 
      style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.8s ease-out'
      }}
    >
      <Stack gap="xl">
        <div style={{ textAlign: 'center' }}>
          <Title order={2} size="2.5rem" mb="md">
            Articles
          </Title>
        </div>

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
              <Card 
                p="md" 
                radius="md" 
                withBorder 
                component="a" 
                href="https://webcafe.bg/yourfuture/da-rabotish-v-balgarska-tehnologichna-kompaniya-s-yaponsko-vdahnovenie.html" 
                target="_blank" 
                style={{ 
                  textDecoration: 'none', 
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Group gap="md" align="flex-start">
                  <Image
                    src="https://static.webcafe.bg/uploads/images/70/1870/381870/768x432.jpg?_=1750687108"
                    alt="DENSHI company article"
                    width={80}
                    height={80}
                    radius="md"
                    fit="cover"
                  />
                  <Stack gap="xs" style={{ flex: 1 }}>
                    <Text size="sm" fw={500} c="dark">
                      Да работиш в българска технологична компания с японско вдъхновение
                    </Text>
                    <Text size="xs" c="dimmed">
                      webcafe.bg
                    </Text>
                    <Text size="xs" c="dimmed">
                      Profile of DENSHI - a young Bulgarian tech company founded in 2023 that focuses on expertise in product and system management, emphasizing Japanese harmony and Bulgarian quality.
                    </Text>
                  </Stack>
                </Group>
              </Card>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
              <Card 
                p="md" 
                radius="md" 
                withBorder 
                component="a" 
                href="https://www.ministryoftesting.com/talks/software-testing-live-episode-04-the-awesome-power-of-shifting-left" 
                target="_blank" 
                style={{ 
                  textDecoration: 'none', 
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Group gap="md" align="flex-start">
                  <Image
                    src="https://embed-ssl.wistia.com/deliveries/c9d911d4c18e015d5b1b54979af4ac92.jpg?image_crop_resized=1280x720"
                    alt="Ministry of Testing article"
                    width={80}
                    height={80}
                    radius="md"
                    fit="cover"
                  />
                  <Stack gap="xs" style={{ flex: 1 }}>
                    <Text size="sm" fw={500} c="dark">
                      Software Testing Live: Episode 04 - The awesome power of shifting left
                    </Text>
                    <Text size="xs" c="dimmed">
                      ministryoftesting.com
                    </Text>
                    <Text size="xs" c="dimmed">
                      Watch how experienced quality professionals break down requirements, probe assumptions, and shape acceptance criteria that add real value to teams.
                    </Text>
                  </Stack>
                </Group>
              </Card>
            </Card>
          </Grid.Col>
        </Grid>

      </Stack>
    </Container>
  )
}