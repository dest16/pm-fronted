<template>
    <div class="rn-card box-card-style-default"
         :class="{'card-list-view': blogPostStyle === 'list'}">
        <div class="inner">
            <div class="thumbnail">
                <router-link class="image" :to="`/message-details/${blog.id}`">
                    <img class="w-100" :src="blog.image" :alt="blog.title">
                </router-link>
            </div>
            <div class="content">
                <ul v-if="blogPostStyle === 'card'" class="rn-meta-list">
                    <li>
                        <router-link :to="''">
                            {{ blog.date }}
                        </router-link>
                    </li>
                    <li class="separator">/</li>
                    <li>{{ blog.category }}</li>
                </ul>
                <h4 class="title">
                    <router-link :to="`/message-details/${blog.id}`">
                        {{ blog.title }}
                    </router-link>
                </h4>
                <ul v-if="blogPostStyle === 'list'" class="rn-meta-list">
                    <li>
                        <router-link :to="''">
                            {{ blog.date }}
                        </router-link>
                    </li>
                    <li class="separator">/</li>
                    <li>{{ blog.category }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Message',
        props: {
            blog: {},
            blogPostStyle: {
                type: String,
                default: 'card'
            }
        }
    }
</script>
