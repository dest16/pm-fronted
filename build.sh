npm --registry https://registry.npm.taobao.org install
npm run build
rm -rf /srv/fronted
mv /srv/temp/dist /srv/fronted
rm -rf /srv/temp
