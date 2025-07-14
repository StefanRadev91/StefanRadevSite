import { Container, Text, Group, Stack, Divider, ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconBrandLinkedin, IconBrandGithub, IconMail, IconPhone } from '@tabler/icons-react'

export function Footer() {
  const { colorScheme } = useMantineColorScheme()
  
  return (
    <footer 
      style={{ 
        backgroundColor: colorScheme === 'dark' ? '#1a1b1e' : '#2c2e33',
        color: 'white',
        marginTop: 'auto'
      }}
    >
      <Container size="xl" py="xl" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Stack gap="lg">
          <Group justify="space-between" align="flex-start">
            <Stack gap="sm">
              <Text size="lg" fw={700} c="white">
                Stefan Radev
              </Text>
              <Text size="sm" c="gray.4">
                QA Team Lead & Automation Engineer
              </Text>
              <Group gap="sm">
                <ActionIcon 
                  variant="subtle" 
                  size="lg" 
                  component="a" 
                  href="https://linkedin.com/in/stefan-radev" 
                  target="_blank"
                  style={{ color: 'white' }}
                  styles={{
                    root: {
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }
                  }}
                >
                  <IconBrandLinkedin size={20} />
                </ActionIcon>
                <ActionIcon 
                  variant="subtle" 
                  size="lg" 
                  component="a" 
                  href="https://github.com/StefanRadev91" 
                  target="_blank"
                  style={{ color: 'white' }}
                  styles={{
                    root: {
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }
                  }}
                >
                  <IconBrandGithub size={20} />
                </ActionIcon>
                <ActionIcon 
                  variant="subtle" 
                  size="lg" 
                  component="a" 
                  href="mailto:stefan.radev91@gmail.com"
                  style={{ color: 'white' }}
                  styles={{
                    root: {
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }
                  }}
                >
                  <IconMail size={20} />
                </ActionIcon>
                <ActionIcon 
                  variant="subtle" 
                  size="lg" 
                  component="a" 
                  href="tel:+359897269135"
                  style={{ color: 'white' }}
                  styles={{
                    root: {
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }
                  }}
                >
                  <IconPhone size={20} />
                </ActionIcon>
              </Group>
            </Stack>
            
            <Stack gap="sm" align="flex-end">
              <Text size="sm" c="gray.4">
                Contact
              </Text>
              <Text size="sm" c="white">
                stefan.radev91@gmail.com
              </Text>
              <Text size="sm" c="white">
                +359 897 269 135
              </Text>
              <Text size="sm" c="white">
                Sofia, Bulgaria
              </Text>
            </Stack>
          </Group>
          
          <Divider color="gray.6" />
          
          <Group justify="space-between" align="center">
            <Text size="sm" c="gray.4">
              © 2025 Stefan Radev. All rights reserved.
            </Text>
            <Text size="sm" c="gray.4">
              Built with React & Mantine
            </Text>
          </Group>
        </Stack>
      </Container>
    </footer>
  )
}