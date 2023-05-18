npm --registry https://registry.npm.taobao.org install
npm run build
cp -r /srv/temp/dist /srv/fronted
rm -rf /srv/temp
