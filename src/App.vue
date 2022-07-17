<template>
  <div class="resume">
    <div class="row justify--center">
      <div class="flex md10 lg8 resume-center">
        <va-card class="resume-container">
          <va-card class="resume-header" color="navy" outlined>
            <va-card-title class="justify--center">
              <p class="resume-name">{{ resumeData.name }}</p>
            </va-card-title>
            <va-card-title class="justify--center">
              <p class="resume-title">{{ resumeData.position }}</p>
            </va-card-title>
          </va-card>
          <va-card-content class="resume-body">
            <div class="row resume-columns" style="flex-wrap: nowrap">
              <div class="column">
                <resume-section align="end" title="Contact">
                  <div class="contact-details">
                    <span>{{ contact.email }}</span>
                    <va-icon :size="18" name="mail" />
                  </div>
                  <div class="contact-details">
                    <span>{{ contact.phone }}</span>
                    <va-icon :size="18" name="call" />
                  </div>
                  <div class="contact-details">
                    <span>{{ contact.location }}</span>
                    <va-icon :size="18" name="room" />
                  </div>
                  <div v-if="contact.linkedin" class="contact-details">
                    <span>{{ contact.linkedin }}</span>
                    <va-icon :size="18" name="person" />
                  </div>
                  <div v-if="contact.github" class="contact-details">
                    <span>{{ contact.github }}</span>
                    <va-icon :size="18" name="code" />
                  </div>
                </resume-section>
                <resume-section align="end" title="Education">
                  <div v-for="(education, index) in resumeData.education" :key="index" class="edu-experience">
                    <p v-if="education.degree">{{ education.degree }}</p>
                    <p>{{ education.school }}</p>
                    <p>{{ education.years }}</p>
                    <p>{{ education.location }}</p>
                  </div>
                </resume-section>
                <resume-section v-if="resumeData.skills" align="end" title="Skills">
                  <ol class="skills">
                    <li v-for="(skill, index) in resumeData.skills" :key="index">{{ skill }}</li>
                  </ol>
                </resume-section>
              </div>
              <div class="column">
                <resume-section title="Objective">
                  <p class="objective">{{ resumeData.objective }}</p>
                </resume-section>
                <resume-section title="Work Experience">
                  <div v-for="(job, index) in resumeData.workExperience" :key="index" class="work-experience">
                    <p class="position">{{ job.position }}</p>
                    <p class="company">{{ job.company }}</p>
                    <p>{{ job.years }} / {{ job.location }}</p>
                    <ul>
                      <li v-for="(task, taskIndex) in job.tasks" :key="taskIndex">{{ task }}</li>
                    </ul>
                  </div>
                </resume-section>
                <resume-section title="Projects">
                  <div class="projects">
                    <ul>
                      <li v-for="(project, index) in resumeData.projects" :key="index">{{ project }}</li>
                    </ul>
                  </div>
                </resume-section>
              </div>
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getDocs, query, collection } from 'firebase/firestore'
import {computed, onBeforeMount, ref} from "vue"

import ResumeSection from '@/components/ResumeSection.vue'

import { database } from "@/services/firebase"
import { Resume } from "@/types"

const resumeData = ref<Resume>({} as Resume)
const contact = computed(() => resumeData.value.contact ?? {})

onBeforeMount(async () => {
  const resumesQuery = await getDocs(query(
      collection(database, 'resumes')
  ))

  if (!resumesQuery.empty) {
    resumeData.value = resumesQuery.docs[0].data() as Resume
  }
  console.log("CONTACT DETAILS", resumeData.value.contact)
})
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/brands.min.css');

  .flex {
    display: flex;
    flex-direction: column;
  }
</style>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Spectral&display=swap');

@media print {
  .resume-center {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
}

.resume {
  margin: 2rem;
}

.resume-container {
  .resume-header {
    padding: 10px 0;
    font-family: 'Spectral', serif;

    .resume-name {
      color: white;
      font-size: 2.65rem;
    }

    .resume-title {
      color: white;
      font-style: italic;
      font-size: 1.2rem;
    }
  }

  .resume-body {
    font-family: 'Spectral', serif;
    padding: 0;

    .resume-columns {
      .contact-details {
        display: flex;
        padding: .2rem 0;

        .va-icon {
          margin-left: .5rem;
        }
      }

      .skills {
        text-align: right;

        li {
          padding: .2rem 0;
        }
      }

      .objective {
        text-align: justify;
        text-justify: inter-word;
      }

      .edu-experience {
        text-align: right;
        line-height: 1.4rem;
        padding-bottom: 1.4rem;
      }

      .edu-experience:last-child {
        padding-bottom: initial;
      }

      .work-experience {
        text-align: left;
        padding-bottom: 2rem;

        .position {
          font-size: 1.2rem
        }

        .company {
          font-size: .9rem;
          padding: .4rem 0;
        }

        ul {
          list-style-type: disc;
          list-style-position: inside;
          text-align: left;

          li {
            padding: .2rem 0;
          }
        }
      }

      .work-experience:last-child {
        padding-bottom: initial;
      }

      .projects {
        padding-bottom: 2rem;

        ul {
          list-style-type: disc;
          list-style-position: inside;
          text-align: left;

          li {
            padding: .2rem 0;
          }
        }
      }

      > div:first-child {
        flex-shrink: 2;
        background-color: #f4f8fa;
      }
    }
  }
}
</style>