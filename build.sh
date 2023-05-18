npm --registry https://registry.npm.taobao.org install --loglevel verbose
npm run build --loglevel verbose
rm -rf /srv/fronted
cp -r /srv/temp/dist /srv/fronted
rm -rf /srv/temp
