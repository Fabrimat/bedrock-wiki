if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let r={};const t=s=>l(s,a),u={module:{uri:a},exports:r,require:t};e[a]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(i(...s),r)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.4a8d5652.js",revision:null},{url:"assets/404.md.4a8d5652.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.53bc1438.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.53bc1438.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.70a5c25c.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.70a5c25c.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.aeb31c0c.js",revision:null},{url:"assets/animation-controllers_death-commands.md.aeb31c0c.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.50617099.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.50617099.lean.js",revision:null},{url:"assets/animation-controllers_index.md.5296f71a.js",revision:null},{url:"assets/animation-controllers_index.md.5296f71a.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.48ab4286.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.48ab4286.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.65fdd34c.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.65fdd34c.lean.js",revision:null},{url:"assets/app.a7a252b0.js",revision:null},{url:"assets/blocks_applying-effects.md.f56efea0.js",revision:null},{url:"assets/blocks_applying-effects.md.f56efea0.lean.js",revision:null},{url:"assets/blocks_avoiding-properties-limit.md.1398b351.js",revision:null},{url:"assets/blocks_avoiding-properties-limit.md.1398b351.lean.js",revision:null},{url:"assets/blocks_block-materials.md.1804ce97.js",revision:null},{url:"assets/blocks_block-materials.md.1804ce97.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.75b39b20.js",revision:null},{url:"assets/blocks_block-shapes.md.75b39b20.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.47d6c60f.js",revision:null},{url:"assets/blocks_block-sounds.md.47d6c60f.lean.js",revision:null},{url:"assets/blocks_block-tags.md.7c3371dc.js",revision:null},{url:"assets/blocks_block-tags.md.7c3371dc.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.c111dc26.js",revision:null},{url:"assets/blocks_block-texture-variation.md.c111dc26.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.e871227c.js",revision:null},{url:"assets/blocks_blocks-experimental.md.e871227c.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.36b4163d.js",revision:null},{url:"assets/blocks_blocks-intro.md.36b4163d.lean.js",revision:null},{url:"assets/blocks_blocks-stable.md.8d1652c4.js",revision:null},{url:"assets/blocks_blocks-stable.md.8d1652c4.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.ed061f8f.js",revision:null},{url:"assets/blocks_custom-crops.md.ed061f8f.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.e96e1caa.js",revision:null},{url:"assets/blocks_custom-fluids.md.e96e1caa.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.55cd60e1.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.55cd60e1.lean.js",revision:null},{url:"assets/blocks_custom-slabs.md.59e875be.js",revision:null},{url:"assets/blocks_custom-slabs.md.59e875be.lean.js",revision:null},{url:"assets/blocks_custom-trapdoor.md.7a53f64d.js",revision:null},{url:"assets/blocks_custom-trapdoor.md.7a53f64d.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.72813ce4.js",revision:null},{url:"assets/blocks_custom-trees.md.72813ce4.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.1ae7f2fb.js",revision:null},{url:"assets/blocks_fake-blocks.md.1ae7f2fb.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.2703aecb.js",revision:null},{url:"assets/blocks_flipbook-textures.md.2703aecb.lean.js",revision:null},{url:"assets/blocks_index.md.50fa0e68.js",revision:null},{url:"assets/blocks_index.md.50fa0e68.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.ffcc9835.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.ffcc9835.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.a19b9eb3.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.a19b9eb3.lean.js",revision:null},{url:"assets/blocks_precise-interaction.md.a5d63f38.js",revision:null},{url:"assets/blocks_precise-interaction.md.a5d63f38.lean.js",revision:null},{url:"assets/blocks_precise-rotation.md.eafb261d.js",revision:null},{url:"assets/blocks_precise-rotation.md.eafb261d.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.66f43757.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.66f43757.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.87769c81.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.87769c81.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.2034fa67.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.e3377b44.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.f951bbad.js",revision:null},{url:"assets/commands_block-states.md.f951bbad.lean.js",revision:null},{url:"assets/commands_damage.md.0864d12a.js",revision:null},{url:"assets/commands_damage.md.0864d12a.lean.js",revision:null},{url:"assets/commands_entity-counter.md.f6170e3d.js",revision:null},{url:"assets/commands_entity-counter.md.f6170e3d.lean.js",revision:null},{url:"assets/commands_index.md.3d53d810.js",revision:null},{url:"assets/commands_index.md.3d53d810.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.f50d4f33.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.f50d4f33.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.6cfd8460.js",revision:null},{url:"assets/commands_mcfunctions.md.6cfd8460.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.e536eacd.js",revision:null},{url:"assets/commands_nbt-commands.md.e536eacd.lean.js",revision:null},{url:"assets/commands_new-execute.md.9207431c.js",revision:null},{url:"assets/commands_new-execute.md.9207431c.lean.js",revision:null},{url:"assets/commands_on-first-join.md.72d7e9ed.js",revision:null},{url:"assets/commands_on-first-join.md.72d7e9ed.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.b9c87d13.js",revision:null},{url:"assets/commands_on-first-world-load.md.b9c87d13.lean.js",revision:null},{url:"assets/commands_on-player-death.md.759efaa6.js",revision:null},{url:"assets/commands_on-player-death.md.759efaa6.lean.js",revision:null},{url:"assets/commands_on-player-join.md.7bd5e056.js",revision:null},{url:"assets/commands_on-player-join.md.7bd5e056.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.4a91ef4c.js",revision:null},{url:"assets/commands_on-player-leave.md.4a91ef4c.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.ab0ef91c.js",revision:null},{url:"assets/commands_on-player-respawn.md.ab0ef91c.lean.js",revision:null},{url:"assets/commands_playsound.md.67a97a52.js",revision:null},{url:"assets/commands_playsound.md.67a97a52.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.b08857d5.js",revision:null},{url:"assets/commands_relative-coordinates.md.b08857d5.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.8a7433ad.js",revision:null},{url:"assets/commands_scoreboard-operations.md.8a7433ad.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.b82897b4.js",revision:null},{url:"assets/commands_scoreboard-timers.md.b82897b4.lean.js",revision:null},{url:"assets/commands_selectors.md.012e095d.js",revision:null},{url:"assets/commands_selectors.md.012e095d.lean.js",revision:null},{url:"assets/commands_tellraw.md.73cfb3b4.js",revision:null},{url:"assets/commands_tellraw.md.73cfb3b4.lean.js",revision:null},{url:"assets/concepts_contents.md.9a44ac65.js",revision:null},{url:"assets/concepts_contents.md.9a44ac65.lean.js",revision:null},{url:"assets/concepts_emojis.md.dc06ff9c.js",revision:null},{url:"assets/concepts_emojis.md.dc06ff9c.lean.js",revision:null},{url:"assets/concepts_index.md.871a4dad.js",revision:null},{url:"assets/concepts_index.md.871a4dad.lean.js",revision:null},{url:"assets/concepts_molang.md.297284e3.js",revision:null},{url:"assets/concepts_molang.md.297284e3.lean.js",revision:null},{url:"assets/concepts_namespaces.md.e0d2990f.js",revision:null},{url:"assets/concepts_namespaces.md.e0d2990f.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.4fb367b4.js",revision:null},{url:"assets/concepts_overwriting-assets.md.4fb367b4.lean.js",revision:null},{url:"assets/concepts_shaders.md.375fb2d8.js",revision:null},{url:"assets/concepts_shaders.md.375fb2d8.lean.js",revision:null},{url:"assets/concepts_sounds.md.6b7da943.js",revision:null},{url:"assets/concepts_sounds.md.6b7da943.lean.js",revision:null},{url:"assets/concepts_subpacks.md.ffda9eae.js",revision:null},{url:"assets/concepts_subpacks.md.ffda9eae.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.3e30e5c3.js",revision:null},{url:"assets/concepts_text-and-translations.md.3e30e5c3.lean.js",revision:null},{url:"assets/concepts_textures-list.md.c7d546f5.js",revision:null},{url:"assets/concepts_textures-list.md.c7d546f5.lean.js",revision:null},{url:"assets/contribute-how-to.md.6c4d5a2a.js",revision:null},{url:"assets/contribute-how-to.md.6c4d5a2a.lean.js",revision:null},{url:"assets/contribute-style.md.8433dbd3.js",revision:null},{url:"assets/contribute-style.md.8433dbd3.lean.js",revision:null},{url:"assets/contribute.md.4f2006f8.js",revision:null},{url:"assets/contribute.md.4f2006f8.lean.js",revision:null},{url:"assets/discord.md.8b467ca3.js",revision:null},{url:"assets/discord.md.8b467ca3.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.febf68a8.js",revision:null},{url:"assets/documentation_advanced-molang.md.febf68a8.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.69a5e644.js",revision:null},{url:"assets/documentation_creative-categories.md.69a5e644.lean.js",revision:null},{url:"assets/documentation_file-types.md.7bafe21f.js",revision:null},{url:"assets/documentation_file-types.md.7bafe21f.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.2341340c.js",revision:null},{url:"assets/documentation_fog-ids.md.2341340c.lean.js",revision:null},{url:"assets/documentation_index.md.31deb5b6.js",revision:null},{url:"assets/documentation_index.md.31deb5b6.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.7e6b537a.js",revision:null},{url:"assets/documentation_material-config-description.md.7e6b537a.lean.js",revision:null},{url:"assets/documentation_materials.md.62b1eff9.js",revision:null},{url:"assets/documentation_materials.md.62b1eff9.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.7d0acb76.js",revision:null},{url:"assets/documentation_pack-structure.md.7d0acb76.lean.js",revision:null},{url:"assets/documentation_projectiles.md.79835f8a.js",revision:null},{url:"assets/documentation_projectiles.md.79835f8a.lean.js",revision:null},{url:"assets/documentation_queries.md.4ee181a9.js",revision:null},{url:"assets/documentation_queries.md.4ee181a9.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.6536884f.js",revision:null},{url:"assets/documentation_shared-constructs.md.6536884f.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.10837592.js",revision:null},{url:"assets/documentation_sound-definitions.md.10837592.lean.js",revision:null},{url:"assets/entities_boat-entities.md.54b07ee4.js",revision:null},{url:"assets/entities_boat-entities.md.54b07ee4.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.b72e00ad.js",revision:null},{url:"assets/entities_detecting-other-entities.md.b72e00ad.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.9a8c7101.js",revision:null},{url:"assets/entities_disabling-team-damage.md.9a8c7101.lean.js",revision:null},{url:"assets/entities_dummy-components.md.e2aa724b.js",revision:null},{url:"assets/entities_dummy-components.md.e2aa724b.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.7dff02ac.js",revision:null},{url:"assets/entities_dummy-entities.md.7dff02ac.lean.js",revision:null},{url:"assets/entities_entity-attack.md.ea28cf5c.js",revision:null},{url:"assets/entities_entity-attack.md.ea28cf5c.lean.js",revision:null},{url:"assets/entities_entity-events.md.4760727c.js",revision:null},{url:"assets/entities_entity-events.md.4760727c.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.dbdb0d2a.js",revision:null},{url:"assets/entities_entity-holds-item.md.dbdb0d2a.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.6f98f273.js",revision:null},{url:"assets/entities_entity-intro-bp.md.6f98f273.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.2e97fa09.js",revision:null},{url:"assets/entities_entity-intro-rp.md.2e97fa09.lean.js",revision:null},{url:"assets/entities_entity-movement.md.dad3faa2.js",revision:null},{url:"assets/entities_entity-movement.md.dad3faa2.lean.js",revision:null},{url:"assets/entities_entity-properties.md.576ffb4a.js",revision:null},{url:"assets/entities_entity-properties.md.576ffb4a.lean.js",revision:null},{url:"assets/entities_flying-entities.md.7fca8027.js",revision:null},{url:"assets/entities_flying-entities.md.7fca8027.lean.js",revision:null},{url:"assets/entities_index.md.8a904603.js",revision:null},{url:"assets/entities_index.md.8a904603.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.4009870d.js",revision:null},{url:"assets/entities_introduction-to-aec.md.4009870d.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.c07d463b.js",revision:null},{url:"assets/entities_invulnerable-entities.md.c07d463b.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.1e8d0022.js",revision:null},{url:"assets/entities_look-at-entity.md.1e8d0022.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.7fe6a614.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.7fe6a614.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.06932e73.js",revision:null},{url:"assets/entities_npc-dialogs.md.06932e73.lean.js",revision:null},{url:"assets/entities_render-controllers.md.d1011c4e.js",revision:null},{url:"assets/entities_render-controllers.md.d1011c4e.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.09eb78ce.js",revision:null},{url:"assets/entities_runtime-identifier.md.09eb78ce.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.daa6547f.js",revision:null},{url:"assets/entities_sleeping-entities.md.daa6547f.lean.js",revision:null},{url:"assets/entities_solid-entities.md.12dc6c02.js",revision:null},{url:"assets/entities_solid-entities.md.12dc6c02.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.fdb407ab.js",revision:null},{url:"assets/entities_spawn-rules.md.fdb407ab.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.ba85e4d5.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.ba85e4d5.lean.js",revision:null},{url:"assets/entities_timers.md.a287e905.js",revision:null},{url:"assets/entities_timers.md.a287e905.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.8c1c9208.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.8c1c9208.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.bb488830.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.bb488830.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.8dde26e0.js",revision:null},{url:"assets/entities_village-mechanic.md.8dde26e0.lean.js",revision:null},{url:"assets/entities_vuc-full.md.218d2719.lean.js",revision:null},{url:"assets/entities_vusr-full.md.2ee3eea9.js",revision:null},{url:"assets/entities_vusr-full.md.2ee3eea9.lean.js",revision:null},{url:"assets/graph-test.md.192034e7.js",revision:null},{url:"assets/graph-test.md.192034e7.lean.js",revision:null},{url:"assets/guide_addons.md.271416f3.js",revision:null},{url:"assets/guide_addons.md.271416f3.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.a8392bb8.js",revision:null},{url:"assets/guide_advancedmanifest.md.a8392bb8.lean.js",revision:null},{url:"assets/guide_blockbench.md.335f2887.js",revision:null},{url:"assets/guide_blockbench.md.335f2887.lean.js",revision:null},{url:"assets/guide_custom-entity.md.4ece0cc1.js",revision:null},{url:"assets/guide_custom-entity.md.4ece0cc1.lean.js",revision:null},{url:"assets/guide_custom-item.md.73c6ca98.js",revision:null},{url:"assets/guide_custom-item.md.73c6ca98.lean.js",revision:null},{url:"assets/guide_download-packs.md.c65c1e37.js",revision:null},{url:"assets/guide_download-packs.md.c65c1e37.lean.js",revision:null},{url:"assets/guide_format-version.md.d5ac2f67.js",revision:null},{url:"assets/guide_format-version.md.d5ac2f67.lean.js",revision:null},{url:"assets/guide_index.md.7eea7350.js",revision:null},{url:"assets/guide_index.md.7eea7350.lean.js",revision:null},{url:"assets/guide_introduction.md.e38336f0.js",revision:null},{url:"assets/guide_introduction.md.e38336f0.lean.js",revision:null},{url:"assets/guide_loot-table.md.542b7069.js",revision:null},{url:"assets/guide_loot-table.md.542b7069.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.02bc00aa.js",revision:null},{url:"assets/guide_project-setup-android.md.02bc00aa.lean.js",revision:null},{url:"assets/guide_project-setup.md.8ff4d4fc.js",revision:null},{url:"assets/guide_project-setup.md.8ff4d4fc.lean.js",revision:null},{url:"assets/guide_software-preparation.md.67067063.js",revision:null},{url:"assets/guide_software-preparation.md.67067063.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.48c845b5.js",revision:null},{url:"assets/guide_troubleshooting.md.48c845b5.lean.js",revision:null},{url:"assets/guide_understanding-json.md.762d3461.js",revision:null},{url:"assets/guide_understanding-json.md.762d3461.lean.js",revision:null},{url:"assets/hacktoberfest.md.21a55810.js",revision:null},{url:"assets/hacktoberfest.md.21a55810.lean.js",revision:null},{url:"assets/index.md.7ef1e5df.js",revision:null},{url:"assets/index.md.7ef1e5df.lean.js",revision:null},{url:"assets/items_attachables.md.5ce9d5c6.js",revision:null},{url:"assets/items_attachables.md.5ce9d5c6.lean.js",revision:null},{url:"assets/items_custom-armor.md.7b8d70fd.js",revision:null},{url:"assets/items_custom-armor.md.7b8d70fd.lean.js",revision:null},{url:"assets/items_custom-weapon.md.6f390144.js",revision:null},{url:"assets/items_custom-weapon.md.6f390144.lean.js",revision:null},{url:"assets/items_enchantments.md.eeaeebb7.js",revision:null},{url:"assets/items_enchantments.md.eeaeebb7.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.d69ac0f5.js",revision:null},{url:"assets/items_equipped-item-commands.md.d69ac0f5.lean.js",revision:null},{url:"assets/items_index.md.95543019.js",revision:null},{url:"assets/items_index.md.95543019.lean.js",revision:null},{url:"assets/items_item-identifiers.md.0dda6a42.js",revision:null},{url:"assets/items_item-identifiers.md.0dda6a42.lean.js",revision:null},{url:"assets/items_items-16.md.527bdc76.js",revision:null},{url:"assets/items_items-16.md.527bdc76.lean.js",revision:null},{url:"assets/items_items-intro.md.b948e978.js",revision:null},{url:"assets/items_items-intro.md.b948e978.lean.js",revision:null},{url:"assets/items_numerical-item-ids.md.568743f9.js",revision:null},{url:"assets/items_numerical-item-ids.md.568743f9.lean.js",revision:null},{url:"assets/items_spawning-items.md.5a6a9e81.js",revision:null},{url:"assets/items_spawning-items.md.5a6a9e81.lean.js",revision:null},{url:"assets/items_spear.md.1b4c4802.js",revision:null},{url:"assets/items_spear.md.1b4c4802.lean.js",revision:null},{url:"assets/items_throwable.md.9bb1b63d.js",revision:null},{url:"assets/items_throwable.md.9bb1b63d.lean.js",revision:null},{url:"assets/items_tool-durability.md.4fc19711.js",revision:null},{url:"assets/items_tool-durability.md.4fc19711.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.e4271b23.js",revision:null},{url:"assets/items_troubleshooting-items.md.e4271b23.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.380600fd.js",revision:null},{url:"assets/items_vanilla-usage-items.md.380600fd.lean.js",revision:null},{url:"assets/items_vui-full.md.bb5c440a.js",revision:null},{url:"assets/items_vui-full.md.bb5c440a.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.f3c114eb.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.f3c114eb.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.f7869c2d.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.f7869c2d.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.5bed9992.js",revision:null},{url:"assets/json-ui_best-practices.md.5bed9992.lean.js",revision:null},{url:"assets/json-ui_index.md.77cd074a.js",revision:null},{url:"assets/json-ui_index.md.77cd074a.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.ad6cfe22.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.ad6cfe22.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.6de1200b.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.6de1200b.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.7ab61632.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.7ab61632.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.99781f15.js",revision:null},{url:"assets/json-ui_string-to-number.md.99781f15.lean.js",revision:null},{url:"assets/loot_index.md.a79d8f3f.js",revision:null},{url:"assets/loot_index.md.a79d8f3f.lean.js",revision:null},{url:"assets/loot_item-functions.md.519a5a32.js",revision:null},{url:"assets/loot_item-functions.md.519a5a32.lean.js",revision:null},{url:"assets/loot_loot-tables.md.5d648a40.js",revision:null},{url:"assets/loot_loot-tables.md.5d648a40.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.114b813a.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.114b813a.lean.js",revision:null},{url:"assets/loot_recipes.md.d7761127.js",revision:null},{url:"assets/loot_recipes.md.d7761127.lean.js",revision:null},{url:"assets/loot_trade-tables.md.b7421296.js",revision:null},{url:"assets/loot_trade-tables.md.b7421296.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.ae8dc262.js",revision:null},{url:"assets/loot_trading-behavior.md.ae8dc262.lean.js",revision:null},{url:"assets/meta_addon-performance.md.bcd57b78.js",revision:null},{url:"assets/meta_addon-performance.md.bcd57b78.lean.js",revision:null},{url:"assets/meta_index.md.7c5ea608.js",revision:null},{url:"assets/meta_index.md.7c5ea608.lean.js",revision:null},{url:"assets/meta_jq.md.5751078e.js",revision:null},{url:"assets/meta_jq.md.5751078e.lean.js",revision:null},{url:"assets/meta_style-guide.md.88820326.js",revision:null},{url:"assets/meta_style-guide.md.88820326.lean.js",revision:null},{url:"assets/meta_useful-links.md.53ffe330.js",revision:null},{url:"assets/meta_useful-links.md.53ffe330.lean.js",revision:null},{url:"assets/meta_using-schemas.md.17e3a399.js",revision:null},{url:"assets/meta_using-schemas.md.17e3a399.lean.js",revision:null},{url:"assets/meta_version-control.md.78c34cda.js",revision:null},{url:"assets/meta_version-control.md.78c34cda.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.8ae7bbe8.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.8ae7bbe8.lean.js",revision:null},{url:"assets/nbt_index.md.3fc33018.js",revision:null},{url:"assets/nbt_index.md.3fc33018.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.125e4f74.js",revision:null},{url:"assets/nbt_mcstructure.md.125e4f74.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.5115b891.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.5115b891.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.f3247373.js",revision:null},{url:"assets/nbt_step-by-step-example.md.f3247373.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.59b9975a.js",revision:null},{url:"assets/nbt_structure-limits.md.59b9975a.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.0f53ae69.js",revision:null},{url:"assets/particles_disabling-particles.md.0f53ae69.lean.js",revision:null},{url:"assets/particles_index.md.02d3f3ca.js",revision:null},{url:"assets/particles_index.md.02d3f3ca.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.03fc2db9.js",revision:null},{url:"assets/particles_particles-and-sounds.md.03fc2db9.lean.js",revision:null},{url:"assets/particles_particles.md.e52e417a.js",revision:null},{url:"assets/particles_particles.md.e52e417a.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.2d474ff7.js",revision:null},{url:"assets/particles_vanilla-particles.md.2d474ff7.lean.js",revision:null},{url:"assets/privacy.md.8a80433a.js",revision:null},{url:"assets/privacy.md.8a80433a.lean.js",revision:null},{url:"assets/scripting_api-environment.md.d69832c7.js",revision:null},{url:"assets/scripting_api-environment.md.d69832c7.lean.js",revision:null},{url:"assets/scripting_custom-command.md.878df2a7.js",revision:null},{url:"assets/scripting_custom-command.md.878df2a7.lean.js",revision:null},{url:"assets/scripting_game-tests.md.a0e4237e.js",revision:null},{url:"assets/scripting_game-tests.md.a0e4237e.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.1cbd615d.js",revision:null},{url:"assets/scripting_gametest-form.md.1cbd615d.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.68d01859.js",revision:null},{url:"assets/scripting_gametest-qna.md.68d01859.lean.js",revision:null},{url:"assets/scripting_index.md.e99af517.js",revision:null},{url:"assets/scripting_index.md.e99af517.lean.js",revision:null},{url:"assets/scripting_placement-prevention.md.ecb4ed74.js",revision:null},{url:"assets/scripting_placement-prevention.md.ecb4ed74.lean.js",revision:null},{url:"assets/scripting_resources.md.6f882435.js",revision:null},{url:"assets/scripting_resources.md.6f882435.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.fb3b3a45.js",revision:null},{url:"assets/scripting_saving-loading.md.fb3b3a45.lean.js",revision:null},{url:"assets/scripting_script-modules.md.5d67a1dc.js",revision:null},{url:"assets/scripting_script-modules.md.5d67a1dc.lean.js",revision:null},{url:"assets/scripting_script-net.md.3e06cdd1.js",revision:null},{url:"assets/scripting_script-net.md.3e06cdd1.lean.js",revision:null},{url:"assets/scripting_script-server.md.da0d2c8f.js",revision:null},{url:"assets/scripting_script-server.md.da0d2c8f.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.fdde0a36.js",revision:null},{url:"assets/scripting_script-watchdog.md.fdde0a36.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.f11f9f59.js",revision:null},{url:"assets/scripting_scripting-intro.md.f11f9f59.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.4214dcad.js",revision:null},{url:"assets/scripting_starting-scripts.md.4214dcad.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.491e1a53.js",revision:null},{url:"assets/scripting_troubleshooting.md.491e1a53.lean.js",revision:null},{url:"assets/scripting_typescript.md.0a1ef0d9.js",revision:null},{url:"assets/scripting_typescript.md.0a1ef0d9.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.4210d1cd.js",revision:null},{url:"assets/scripting_what-is-script.md.4210d1cd.lean.js",revision:null},{url:"assets/servers_index.md.8208549a.js",revision:null},{url:"assets/servers_index.md.8208549a.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.c5ce47eb.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.c5ce47eb.lean.js",revision:null},{url:"assets/servers_server-software.md.239b8041.js",revision:null},{url:"assets/servers_server-software.md.239b8041.lean.js",revision:null},{url:"assets/style.bd803282.css",revision:null},{url:"assets/test.md.dd6d7cae.js",revision:null},{url:"assets/test.md.dd6d7cae.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.7a8b97d7.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.7a8b97d7.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.bc170865.js",revision:null},{url:"assets/visuals_animation-effects.md.bc170865.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.4faccee6.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.4faccee6.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.0e796ea2.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.0e796ea2.lean.js",revision:null},{url:"assets/visuals_death-animations.md.22f9dc88.js",revision:null},{url:"assets/visuals_death-animations.md.22f9dc88.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.faae183c.js",revision:null},{url:"assets/visuals_glowing-texture.md.faae183c.lean.js",revision:null},{url:"assets/visuals_index.md.f402ba2f.js",revision:null},{url:"assets/visuals_index.md.f402ba2f.lean.js",revision:null},{url:"assets/visuals_introduction.md.3566a19a.js",revision:null},{url:"assets/visuals_introduction.md.3566a19a.lean.js",revision:null},{url:"assets/visuals_leash-position.md.21298aee.js",revision:null},{url:"assets/visuals_leash-position.md.21298aee.lean.js",revision:null},{url:"assets/visuals_material-creations.md.540177f4.js",revision:null},{url:"assets/visuals_material-creations.md.540177f4.lean.js",revision:null},{url:"assets/visuals_materials.md.9ddd38d6.js",revision:null},{url:"assets/visuals_materials.md.9ddd38d6.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.da007682.js",revision:null},{url:"assets/visuals_math-based-animations.md.da007682.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.948af30b.js",revision:null},{url:"assets/visuals_player-geometry.md.948af30b.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.d057a067.js",revision:null},{url:"assets/visuals_remove-shadows.md.d057a067.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.51ed0314.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.51ed0314.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.81a0c6ed.js",revision:null},{url:"assets/visuals_structure-presentation.md.81a0c6ed.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.0f23ddb9.js",revision:null},{url:"assets/vr_editing-your-first-model.md.0f23ddb9.lean.js",revision:null},{url:"assets/vr_index.md.19cec614.js",revision:null},{url:"assets/vr_index.md.19cec614.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.9f45e6a4.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.9f45e6a4.lean.js",revision:null},{url:"assets/vr_pack_setup.md.5cbb4db7.js",revision:null},{url:"assets/vr_pack_setup.md.5cbb4db7.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.0c7c81cf.js",revision:null},{url:"assets/world-generation_biome-tags.md.0c7c81cf.lean.js",revision:null},{url:"assets/world-generation_biomes.md.ba3c641a.js",revision:null},{url:"assets/world-generation_biomes.md.ba3c641a.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.3915a4ee.js",revision:null},{url:"assets/world-generation_custom-ores.md.3915a4ee.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.68ad7440.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.68ad7440.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.dd58d98f.js",revision:null},{url:"assets/world-generation_feature-types.md.dd58d98f.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.7df7b539.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.7df7b539.lean.js",revision:null},{url:"assets/world-generation_index.md.84c32294.js",revision:null},{url:"assets/world-generation_index.md.84c32294.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.02eb4d77.js",revision:null},{url:"assets/world-generation_structure-features.md.02eb4d77.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.fd4bea83.js",revision:null},{url:"assets/world-generation_surface-builder.md.fd4bea83.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.c4585142.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.c4585142.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
