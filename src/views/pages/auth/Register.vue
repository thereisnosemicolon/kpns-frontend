<script setup>
import { ref, computed } from 'vue';

import { login } from '@/service/authService';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import ProgressSpinner from 'primevue/progressspinner';
import Slider from 'primevue/slider';
import ScrollPanel from 'primevue/scrollpanel';
const name = ref('');
const tanggal_lahir = ref('');
const no_ktp = ref('');
const kelurahan = ref('');
const kecamatan = ref('');
const kota = ref('');
const provinsi = ref('');
const kodepos = ref('');
const phone = ref('');
const bank = ref('');
const nama_rekening = ref('');
const norek = ref('');
let value_top_up = ref(600000);
let bagi_hasil = ref(1666);
let total_keuntungan = ref(1200000);
// const checked = ref(false);
const router = useRouter();
const toast = useToast();
const loading = ref(false);

const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(value);
};

const logoUrl = computed(() => {
    return `/layout/images/logo_backoffice_coffelabs.svg`;
});

const handlerSlider = () => {
    total_keuntungan.value = value_top_up.value * 2;
    bagi_hasil.value = (value_top_up.value / 12 / 30) * 2;
}

const handleRegister = async () => {
    if (email.value === '' || password.value === '') {
        toast.add({ severity: 'error', summary: 'Validation Failed', detail: 'Email and Password are required', life: 3000 });
        return;
    }

    loading.value = true;
    try {
        await login(email.value, password.value);
        router.push('/');
    } catch (error) {
        toast.add({ severity: 'error', summary: 'Login Failed', detail: error.message });
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <div>
                <div class="w-full surface-card shadow-2 py-4 px-1 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <!-- <img :src="logoUrl" alt="Image" height="150" class="mb-3" /> -->
                        <div class="text-5xl font-medium mb-3 title-login">Registrasi Peserta SiPitung</div>
                    </div>
                    <div class="grid">
                        <div class="lg:w-30rem">
                            <div class="surface-border">
                                <div class="grid">
                                    <div class="col-4">
                                        <InputText id="email1" type="text" placeholder="Nama Lengkap" class="lg:w-10rem p-1 mb-4" disabled style="padding: 1rem" />
                                        <InputText id="email1" type="text" placeholder="Tanggal Lahir" class="lg:w-10rem p-1 mb-4" disabled style="padding: 1rem" />
                                        <InputText id="email1" type="text" placeholder="Nomor KTP" class="lg:w-10rem p-1 mb-4" disabled style="padding: 1rem" />
                                        <InputText id="email1" type="text" placeholder="Alamat" class="lg:w-10rem p-1 mb-7" disabled style="padding: 1rem" />
                                        <InputText id="email1" type="text" placeholder="Kelurahan" class="lg:w-10rem p-1 mb-4" disabled style="padding: 1rem" />
                                        <InputText id="email1" type="text" placeholder="Kecamatan" class="lg:w-10rem p-1 mb-4" disabled style="padding: 1rem" />
                                        <InputText id="email1" type="text" placeholder="Kabupaten/Kota" class="lg:w-10rem p-1 mb-4" disabled style="padding: 1rem" />
                                        <InputText id="email1" type="text" placeholder="Provinsi" class="lg:w-10rem p-1 mb-4" disabled style="padding: 1rem" />
                                        <InputText id="email1" type="text" placeholder="Kode Pos" class="lg:w-10rem p-1 mb-4" disabled style="padding: 1rem" />
                                        <InputText id="email1" type="text" placeholder="Nomor Whatsapp" class="lg:w-10rem p-1 mb-4" disabled style="padding: 1rem" />
                                        <InputText id="email1" type="text" placeholder="Bank" class="lg:w-10rem p-1 mb-4" disabled style="padding: 1rem" />
                                        <InputText id="email1" type="text" placeholder="Nama Lengkap" class="lg:w-10rem p-1 mb-4" disabled style="padding: 1rem" />
                                        <InputText id="email1" type="text" placeholder="No Rek Bank" class="lg:w-10rem p-1 mb-4" disabled style="padding: 1rem" />
                                    </div>
                                    <div class="col-6">
                                        <!-- label input start -->
                                        <InputText id="email1" type="text" placeholder="Nama Lengkap" class="lg:w-15rem p-1 mb-4" style="padding: 1rem" v-model="name" />
                                        <InputText id="email1" type="text" placeholder="Tanggal Lahir" class="lg:w-15rem p-1 mb-4" style="padding: 1rem" v-model="tanggal_lahir" />
                                        <InputText id="email1" type="text" placeholder="No.KTP" class="lg:w-15rem p-1 mb-4" style="padding: 1rem" v-model="no_ktp" />
                                        <Textarea v-model="alamat" rows="3" cols="30" class="lg:w-15rem p-1 mb-4" style="padding: 1rem" />
                                        <InputText id="email1" type="text" placeholder="Kelurahan" class="lg:w-15rem p-1 mb-4" style="padding: 1rem" v-model="kelurahan" />
                                        <InputText id="email1" type="text" placeholder="Kecamatan" class="lg:w-15rem p-1 mb-4" style="padding: 1rem" v-model="kecamatan" />
                                        <InputText id="email1" type="text" placeholder="Kabupaten/Kota" class="lg:w-15rem p-1 mb-4" style="padding: 1rem" v-model="kota" />
                                        <InputText id="email1" type="text" placeholder="Provinsi" class="lg:w-15rem p-1 mb-4" style="padding: 1rem" v-model="provinsi" />
                                        <InputText id="email1" type="text" placeholder="Kode Pos" class="lg:w-15rem p-1 mb-4" style="padding: 1rem" v-model="kodepos" />
                                        <InputText id="email1" type="text" placeholder="Nomor Whatsapp" class="lg:w-15rem p-1 mb-4" style="padding: 1rem" v-model="phone" />
                                        <InputText id="email1" type="text" placeholder="Bank" class="lg:w-15rem p-1 mb-4" style="padding: 1rem" v-model="bank" />
                                        <InputText id="email1" type="text" placeholder="Nama Lengkap" class="lg:w-15rem p-1 mb-4" style="padding: 1rem" v-model="nama_rekening" />
                                        <InputText id="email1" type="text" placeholder="No Rek Bank" class="lg:w-15rem p-1 mb-4" style="padding: 1rem" v-model="norek" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-25rem">
                            <div class="p-3 surface-border">
                                <div class="text-5xl text-center font-bold title-login">{{ formatCurrency(value_top_up) }}</div>
                                <div class="text-600 font-medium text-center">Bagi Hasil {{ formatCurrency(bagi_hasil) }} Per Hari Selama 24 Bulan</div>
                                <div class="text-600 font-medium text-center">Senilai {{ formatCurrency(total_keuntungan) }} </div>
                                <Slider class="mt-5 mb-5" v-model="value_top_up" :min="600000" :max="10000000" :step="50000" @change="handlerSlider" />
                                <div class="flex-auto">
                                    <ScrollPanel
                                    style="width: 100%; height: 400px"
                                    :pt="{
                                        wrapper: {
                                            style: { 'border-right': 'rgb(var(--primary-400)/10%)' }
                                        },
                                        bary: 'relative z-20 w-[9px] top-0 rounded-full bg-primary-300 hover:bg-primary-400'
                                    }"
                                    >
                                        <p class="text-900 font-medium">
                                            Pengertian
                                        </p>
                                        <p class="text-500 font-medium">
                                            1. SiPitung (Simpanan Pintar Untung) adalah program bagi hasil harian anggota KPNS
                                        </p>
                                        <p class="text-500 font-medium">
                                            2. Nominal simpanan menyesuaikan besarnya keuntungan selama 12 bulan.
                                        </p>
                                        <p class="text-500 font-medium">
                                            3. Manfaat untuk anggota berupa bagi hasil harian selama 24 bulan, yang bisa tarik setiap bulan ke rekening anggota
                                        </p>
                                        <p class="text-500 font-medium">
                                            4. Anggota dapat menambah simpanan kapan saja tanpa harus menunggu masa periode berakhir.
                                        </p>
                                        <p class="text-500 font-medium">
                                            5. Setelah berakhir periode simpanan (24 bulan), anggota bisa memperpanjangan keanggotan kembali.
                                        </p>
                                        <p class="text-900 font-medium">
                                            Syarat & Ketentuan
                                        </p>
                                        <p class="text-500 font-medium">
                                            1. Hanya untuk kalangan terbatas anggota / calon anggota KPN
                                        </p>
                                        <p class="text-500 font-medium">
                                            2. Memiliki KTP
                                        </p>
                                        <p class="text-500 font-medium">
                                            3. Memiliki nomor rekening bank
                                        </p>
                                        <p class="text-500 font-medium">
                                            4. Membayar biaya pendaftaran keanggotan Rp50.000
                                        </p>
                                        <p class="text-500 font-medium">
                                            5. Menyetorkan simpanan sesuai nominal dalam kontrak ke rekening KPNS (BRI XXXX, BCA XXXX, Mandiri XXXX, BNI XXXX) dan bersedia di kelola KPNS.
                                        </p>
                                    </ScrollPanel>
                                </div>
                                <Button class="mt-5 w-full"  label="Daftar Sekarang" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Toast />
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.custom-grid {
    max-width: 1200px;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}

.title-login{
    color: var(--primary-color);
}

.sign-in{
    background-color: #45a049;
    color: white;
    border: none;
}

.sign-in:hover {
  background-color: green;
}

</style>
